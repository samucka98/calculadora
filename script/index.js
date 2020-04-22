const keys = document.getElementsByTagName('button');

let expression = [];

function display() {

  if (this.innerText !== 'c') {
    expression.push(this.innerText);
    document.getElementById('dsp').innerText = expression.join(' ');
  }

  if (this.innerText === 'c') {
    expression = [];
    document.getElementById('dsp').innerText = '';
  }

  if (this.innerText === '=') {
    let result = 0;
 
    document.getElementById('dsp').innerText = result;
  }
}

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', display);
}