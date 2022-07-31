export default class CurrentlyEditTrack {

    state = {
        newRouteLayer: null,
        pointsList: [],
        trackName: null,
        distance: 0,
        startDraw: false,
        stopDraw: false,
        deleteTrack: false,
        refreshLayer: false,
        deleteLayer: false,
        prepareMap: false
    };

    getState() {
        return this.state;
    }
}