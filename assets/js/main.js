// -----lev1_2-----
const example = document.getElementsByClassName('example');

myFunction = () => {
  if(example[0].style.backgroundColor == 'black') {
    changeExampleColor('#666', 'black', '#efefef');
  } else {
    changeExampleColor('black', 'white', 'black');
  }
}

function changeExampleColor (bgColor, color, buttonColor) {
  for(let i = 0; i < example.length; i++) {
    example[i].style.backgroundColor = bgColor;
  }

  example[4].style.backgroundColor = buttonColor;
  example[4].style.color = color;
}


// -----lev2_3-----
let item = document.getElementsByTagName('li');

changeMe = () => {
  item[0].style.backgroundColor = '#f6c89f';
  item[1].style.backgroundColor = '#ffe7d1';
  item[2].style.backgroundColor = '#4b8e8d';
  item[3].style.backgroundColor = '#396362';

  for(let i = 0; i < item.length; i++) {
    item[i].style.color = '#333';
  }
}


// -----lev2_4-----
const button = document.getElementById('button');
const changeColor = document.getElementById('farbeAuswahlen');
const form = document.getElementsByTagName('form')[0];

button.addEventListener('click', function(){
  event.preventDefault();
  form.style.backgroundColor = changeColor.value.toLowerCase().replace(' ', '');
});
