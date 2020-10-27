import Controller from '@ember/controller';

export default class MapController extends Controller {
  lat = 15.4964464;
  lng = 73.8201439;
  zoom = 14;

  emberConfLocation = [15.4964464, 73.8201439];

  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
}