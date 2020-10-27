import Component from '@glimmer/component';

export default class MapComponent extends Component {
  lat = 15.496983;
  lng = 73.821863;
  zoom = 13;
  emberConfLocation = [15.496983, 73.821863];
  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
}
