const text = ['Hola esto es un ejemplo.', 'De texto escrito con javascript', 'Infinito'];
let textCurrent = 0;
let textPositon = 0;
let textUngroup = null;
const timeLine = 100;
const timeChange = 1000;
init = function(){ 
  readText();
}

readText = ()=>{
  if(text[textCurrent]){
     textUngroup = text[textCurrent].split('');
     moveText();
  } else{
    textCurrent=0;
    readText();
  }
}
moveText = ()=>{
  let el = document.querySelector('.cont');
  if(textUngroup[textPositon]){        
    el.innerHTML = el.innerHTML + textUngroup[textPositon];
    setTimeout(() => {
      textPositon++;
      moveText();
    }, timeLine);
  } else{
    setTimeout(() => {
      textPositon = 0;
      textCurrent++;
      el.innerHTML = '';
      readText();
    }, timeChange);
  }
}
