// -----lev1_2-----
const example = document.getElementsByClassName('example');

myFunction = () => {
  for(let i = 0; i < example.length; i++) {
    example[i].style.backgroundColor = 'black';
  }

  example[4].style.color = 'white';
}


// -----lev2_3-----
let item = document.getElementsByClassName('item');

changeMe = () => {
  item[0].style.backgroundColor = '#f6c89f';
  item[1].style.backgroundColor = '#ffe7d1';
  item[2].style.backgroundColor = '#4b8e8d';
  item[3].style.backgroundColor = '#396362';
}


// -----lev2_4-----
const button = document.getElementById('button');
const changeColor = document.getElementById('farbeAuswahlen');

button.addEventListener('click', function(){
  event.preventDefault();
  document.body.style.backgroundColor = changeColor.value.toLowerCase().replace(' ', '');
});
