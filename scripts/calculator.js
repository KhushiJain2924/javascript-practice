function result(){
  document.querySelector('.js-calculator-result-text').innerHTML = calculation;
}
let calculation = localStorage.getItem('calculation') || '';
function calculator(number){
  calculation += number;
  result();
  localStorage.setItem('calculation',calculation);
}
function saveCalculation(){
  localStorage.setItem('calculation',calculation);
}
let 
function Enterkey(event){
  if(event.key >= '0' && event.key <='9'){
    let number = event.key;
    document.querySelector('.js-calculator-result-text').textContent = `${number}`;
  }
}