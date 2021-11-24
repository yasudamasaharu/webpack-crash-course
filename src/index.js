import _ from 'lodash'
import { NAME as NAME_OF_MY } from './utilities'
import Lion from './utilities'



console.log(Lion.say());
//console.log(utilities.Nijou(3));
console.log(NAME_OF_MY);

function component(){
  const element = document.createElement('div');
  const arry = ['Hello', 'webpack'];
  element.innerHTML = _.join(arry, ' ');
  return element
}

document.body.appendChild(component());



