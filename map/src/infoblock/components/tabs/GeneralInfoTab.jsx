import React, { useContext, useState } from 'react';
import { Box, Button, Divider } from '@mui/material';
import AppContext from '../../../context/AppContext';
import { Add, Download } from '@mui/icons-material';
import contextMenuStyles from '../../styles/ContextMenuStyles';
import DeleteTrackDialog from '../track/dialogs/DeleteTrackDialog';
import GpxGraphProvider from '../graph/GpxGraphProvider';
import GeneralInfo from '../track/GeneralInfo';
import DescTrackDialog from '../track/dialogs/DescTrackDialog';
import { hasSegments, isEmptyTrack } from '../../../context/TracksManager';
import { Checkbox, FormControlLabel } from '@mui/material/';
import { makeStyles } from '@material-ui/core/styles';
import TracksManager from '../../../context/TracksManager';

const useStyles = makeStyles({
    checkbox: {
        '& .MuiTypography-root': {
            fontSize: '12',
        },
        transform: 'scale(0.8)',
    },
});

export const downloadGpx = async (ctx) => {
    const gpx = await TracksManager.getGpxTrack(ctx.selectedGpxFile);
    if (gpx) {
        const data = gpx.data;
        const url = document.createElement('a');
        url.href = URL.createObjectURL(new Blob([data]));
        const name = TracksManager.prepareName(
            ctx.selectedGpxFile.name,
            ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK
        );
        url.download = `${name}.gpx`;
        url.click();
    }
};

export default function GeneralInfoTab({ setShowInfoBlock }) {
    const styles = contextMenuStyles();
    const ctx = useContext(AppContext);
    const classes = useStyles();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openDescDialog, setOpenDescDialog] = useState(false);

    function addToCollection() {
        if (!ctx.gpxCollection.find((name) => name === ctx.selectedGpxFile.name)) {
            ctx.gpxCollection.push(ctx.selectedGpxFile.name);
            ctx.setGpxCollection([...ctx.gpxCollection]);
        }
    }

    return (
        <>
            <Box>
                <GeneralInfo width={ctx.infoBlockWidth} setOpenDescDialog={setOpenDescDialog} />
                {ctx.currentObjectType === ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK && (
                    <>
                        {!isEmptyTrack(ctx.selectedGpxFile) && <Divider sx={{ mt: '3px', mb: '12px' }} />}
                        <div style={{ marginLeft: '15px', marginTop: '-10px' }}>
                            {!isEmptyTrack(ctx.selectedGpxFile, false, true) && (
                                <FormControlLabel
                                    className={classes.checkbox}
                                    key={'show_points'}
                                    label={'Show track points'}
                                    control={
                                        <Checkbox
                                            sx={{ marginLeft: '-30px' }}
                                            checked={ctx.showPoints.points}
                                            onChange={() => ctx.mutateShowPoints((o) => (o.points = !o.points))}
                                        />
                                    }
                                ></FormControlLabel>
                            )}
                            {!isEmptyTrack(ctx.selectedGpxFile, true, false) && (
                                <FormControlLabel
                                    className={classes.checkbox}
                                    key={'show_wpts'}
                                    label={'Show track wpts'}
                                    control={
                                        <Checkbox
                                            sx={{ marginLeft: '-30px' }}
                                            checked={ctx.showPoints.wpts}
                                            onChange={() => ctx.mutateShowPoints((o) => (o.wpts = !o.wpts))}
                                        />
                                    }
                                ></FormControlLabel>
                            )}
                        </div>
                    </>
                )}
                {hasSegments(ctx.selectedGpxFile) && (
                    <>
                        <GpxGraphProvider width={ctx.infoBlockWidth} />
                    </>
                )}
                {isEmptyTrack(ctx.selectedGpxFile) === false && (
                    <>
                        <Divider sx={{ mt: '3px', mb: '12px' }} />
                        <Button
                            sx={{ ml: '-0.5px !important' }}
                            variant="contained"
                            className={styles.button}
                            onClick={() => downloadGpx(ctx)}
                        >
                            <Download fontSize="small" sx={{ mr: '3px' }} />
                            Download GPX
                        </Button>
                        <Button variant="contained" className={styles.button} onClick={addToCollection}>
                            <Add fontSize="small" sx={{ mr: '3px' }} />
                            Collection (OBF MAP)
                        </Button>
                    </>
                )}
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Button
                    variant="contained"
                    sx={{ ml: '-0.5px !important' }}
                    className={styles.button}
                    onClick={() => setShowInfoBlock(false)}
                >
                    Close Track
                </Button>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#ff595e !important' }}
                    className={styles.button}
                    onClick={() => {
                        setOpenDeleteDialog(true);
                    }}
                >
                    Delete Track
                </Button>
            </Box>
            {openDeleteDialog && (
                <DeleteTrackDialog
                    dialogOpen={openDeleteDialog}
                    setDialogOpen={setOpenDeleteDialog}
                    setShowInfoBlock={setShowInfoBlock}
                />
            )}
            {openDescDialog && <DescTrackDialog dialogOpen={openDescDialog} setDialogOpen={setOpenDescDialog} />}
        </>
    );
}
