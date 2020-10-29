import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class ImageWrapperComponent extends Component {
    @action imgDark() {
    const portfolioItems = document.querySelectorAll('.item-wrapper');
  
    portfolioItems.forEach(element => {
        element.addEventListener('mouseover', () => {
          element.childNodes[1].classList.add('img-darken');
        })
    })
    
    portfolioItems.forEach(element => {
        element.addEventListener('mouseout', () => {
          element.childNodes[1].classList.remove('img-darken');
        })
    })
    }
}
