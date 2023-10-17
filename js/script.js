/* 
 * Inserisci un numero, se è pari stampa il numero,
 * se è dispari stampa il numero successivo.
let msg;
prendere il numero inserito let numeroInserito
controllo che sia un numero
se è un numero
    se il numero inserito è divisibile per 2 msg = numero
    altrimenti msg = numero + 1
    
altrimenti
 msg = errore
stampo
 */
AlwaysEven();
function AlwaysEven(){

    const btn = document.querySelector('button');
    const resultEl = document.querySelector('.alert');
    const inputEl = document.getElementById('data');

    btn.addEventListener('click', printAlwaysEven);

    function printAlwaysEven(){
        //let alertColor;
       let msg;
       let numeroInserito = parseInt(inputEl.value);
       resetForm();
       if(!isNaN(numeroInserito)){
            msg = (isEven(numeroInserito)) ? numeroInserito : numeroInserito + 1;
            //alertColor = 'alert-success';
       } else {
           //alertColor = 'alert-danger';
           msg = 'Non hai inseriro un numero'
      }
       printResult(msg);
    
    }
    function printResult(message){
        let alertColor = isNaN(message) ? 'alert-danger' : 'alert-success';
        //const resultEl = document.querySelector('.alert');
        resultEl.classList.add(alertColor);
        resultEl.classList.remove('d-none');
        resultEl.innerText = message;
    }
      
    function resetForm(){
        //const resultEl = document.querySelector('.alert');
        inputEl.value = '';
        resultEl.classList.remove('alert-danger');
        resultEl.classList.remove('alert-success');
        resultEl.classList.add('d-none');
    }
}

//IIFE
// (function(){
   
// })();