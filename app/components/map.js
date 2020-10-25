import Component from '@glimmer/component';
import ENV from 'portfolio/config/environment';

const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles";

export default class MapComponent extends Component {
    get map() {
        return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    }
}
