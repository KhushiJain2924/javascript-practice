function subscribed(){
  let buttonElement = document.querySelector('.js-subscribe-button');
  if(buttonElement.innerHTML === 'Subscribe'){
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('subscribed-button')
  }
  else{
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('subscribed-button')
  }
}

function handlekey(event){
  if(event.key === 'Enter'){
    calculate();
  }
}
function calculate(){
  let cost = document.querySelector('.js-cost-input');
  let finalCost = Number(cost.value);

  //to first reset previous line
  document.querySelector('.js-cost-text')
          .innerHTML = '';
        document.querySelector('.js-error-text')
          .innerHTML = '';

  if(finalCost < 0){
    document.querySelector('.js-error-text').innerHTML = `Error: cost cannot be less than $0`;
    return;
  }
  if(finalCost < 40){
    finalCost +=10;
  }
 
  
    document.querySelector('.js-cost-text').innerHTML=`$${finalCost}`;
  
}