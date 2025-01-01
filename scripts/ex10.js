// // let add = (value1, value2)=>value1 + value2;
// // add(2,4);

// let add = ()=>2+3;

// let runTwice = (fun)=>fun();fun();


// runTwice(()=>'12b');

// runTwice(add);

// document.querySelector('.js-add-button').addEventListener('click',()=>{
//   added();
// })

document.querySelector('.js-start-button').addEventListener('click',()=>{
  const button = document.querySelector('.js-start-button');
  setTimeout(()=>{
    button.innerHTML = 'Finished!';
  },1000);
});
// let timeoutId;
// let added = () => {
//   const message = document.querySelector('.text-message');
//   message.innerHTML = 'Added';
//   clearTimeout(timeoutId);

//   timeoutId = setTimeout(function(){
//     message.innerHTML = '';
//   },2000);
// }

// let messages = 2;
// let intervalID;
// let isDisplayNotification;
// displayNotification();

// let displayNotification = () => {
//   if(isDisplayNotification){
//     return;
//   }
//   isDisplayNotification = true;
//   intervalID = setInterval(function(){
//     if(document.title === 'App'){
//       document.title = `(${messages}) New messages`;
//     }
//     else{
//       document.title = 'App';
//     }
//   },1000);
// }

// let stopNotification = () => {
//   isDisplayNotification = false;
//   clearInterval(intervalID);
//   document.title = 'App';
// }


