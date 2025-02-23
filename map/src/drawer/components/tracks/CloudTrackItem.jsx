import AppContext from '../../../context/AppContext';
import { Alert, LinearProgress, ListItemText, MenuItem, Switch, Tooltip, Typography } from '@mui/material';
import { useContext, useState, useMemo } from 'react';
import Utils from '../../../util/Utils';
import TrackInfo from './TrackInfo';
import TracksManager, { isEmptyTrack } from '../../../context/TracksManager';
import _ from 'lodash';
import { useWindowSize } from '../../../util/hooks/useWindowSize';

export default function CloudTrackItem({ file, customIcon = null }) {
    const ctx = useContext(AppContext);

    const [, , mobile] = useWindowSize();

    const [loadingTrack, setLoadingTrack] = useState(false);
    const [error, setError] = useState('');

    const info = useMemo(() => <TrackInfo file={file} />, [file]);

    async function enableLayer(setProgressVisible, visible) {
        if (!visible) {
            deleteTrackFromMap();
            setProgressVisible(false);
        } else {
            await addTrackToMap(setProgressVisible);
        }
    }

    function deleteTrackFromMap() {
        ctx.mutateGpxFiles((o) => (o[file.name].url = null));
        if (ctx.selectedGpxFile?.name === file.name) {
            ctx.setCurrentObjectType(null);
        }
    }

    async function addTrackToMap(setProgressVisible) {
        // cleanup edited localTrack
        if (ctx.createTrack?.enable && ctx.selectedGpxFile) {
            ctx.setCreateTrack({
                enable: false,
                closePrev: {
                    file: _.cloneDeep(ctx.selectedGpxFile),
                },
            });
        }
        // Watch out for file.url because this component was called using different data sources.
        // CloudTrackGroup uses ctx.tracksGroups (no-url) but VisibleGroup uses ctx.gpxFiles (url exists)
        if (file.url || ctx.gpxFiles[file.name]?.url) {
            // if (file.name !== ctx.selectedGpxFile.name) { ...
            ctx.setCurrentObjectType(ctx.OBJECT_TYPE_CLOUD_TRACK);
            ctx.setSelectedGpxFile({ ...ctx.gpxFiles[file.name], zoom: true });
        } else {
            setProgressVisible(true);
            const URL = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file`;
            const qs = `?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
            const oneGpxFile = {
                url: URL + qs,
                clienttimems: file.clienttimems,
                updatetimems: file.updatetimems,
                name: file.name,
                type: 'GPX',
            };
            const f = await Utils.getFileData(oneGpxFile);
            const gpxfile = new File([f], file.name, {
                type: 'text/plain',
            });
            const track = await TracksManager.getTrackData(gpxfile);
            setProgressVisible(false);
            if (!track) {
                setError('Something went wrong!');
            } else if (isEmptyTrack(track) === false) {
                const type = ctx.OBJECT_TYPE_CLOUD_TRACK;
                ctx.setCurrentObjectType(type);
                track.name = file.name;
                Object.keys(track).forEach((t) => {
                    oneGpxFile[t] = track[t];
                });
                oneGpxFile.analysis = TracksManager.prepareAnalysis(oneGpxFile.analysis);

                ctx.mutateGpxFiles((o) => (o[file.name] = oneGpxFile));
                ctx.setSelectedGpxFile(Object.assign({}, oneGpxFile));

                setError('');
            } else {
                setError('Empty track is not supported!');
            }
        }
    }

    const rendered = useMemo(
        () => (
            <>
                <Tooltip title={info} arrow placement={mobile ? 'bottom' : 'right'} disableInteractive>
                    <MenuItem onClick={() => addTrackToMap(ctx.setGpxLoading)}>
                        <ListItemText inset>
                            <Typography variant="inherit" noWrap>
                                {customIcon}
                                {TracksManager.getFileName(file)}
                            </Typography>
                        </ListItemText>
                        <Switch
                            disabled={loadingTrack}
                            checked={!!ctx.gpxFiles[file.name]?.url}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => {
                                !file.local && enableLayer(setLoadingTrack, e.target.checked);
                            }}
                        />
                    </MenuItem>
                </Tooltip>
                {loadingTrack ? <LinearProgress /> : <></>}
                {error !== '' && (
                    <Alert onClose={() => setError('')} severity="warning">
                        {error}
                    </Alert>
                )}
            </>
        ),
        [info, mobile, customIcon, file, loadingTrack, ctx.gpxFiles[file.name]?.url, error]
    );

    return rendered;
}
