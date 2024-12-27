console.log(document.querySelector('.js-button0').classList.contains('js-button0'));

      function togglee(selector){
        let buttonElement = document.querySelector(selector);
        if(buttonElement.classList.contains('is-toggle')){
         
          buttonElement.classList.remove('is-toggle');
        }
        else{
          removePrevious();
          buttonElement.classList.add('is-toggle');
        }
      }

      function removePrevious(){
        let previousButton = document.querySelector('.is-toggle')
        if(previousButton){
          previousButton.classList.remove('is-toggle');
        }
      }