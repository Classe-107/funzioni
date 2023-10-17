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


//chiamo funzione principale (main)
AlwaysEven();

/**
 * Main Function 
 */
function AlwaysEven(){
    
    //prendo l'elemento bottone
    const btn = document.querySelector('button');

    //prendo il div dove devo stampare
    const resultEl = document.querySelector('.alert');

    //prendo la casella di input
    const inputEl = document.getElementById('data');

    //aggiungo eventListener al bottone
    btn.addEventListener('click', printAlwaysEven);

    /**
     * Funzione che parte al click sul bottone passata come callback al bottone
     */
    function printAlwaysEven(){
       
     // variabili messaggio da stampare e valore inserito dall'utente
       let msg;
       let numeroInserito = parseInt(inputEl.value);

       //resetto il form allo stato iniziale
       resetForm();

       //controllo che il valore inseerito sia un numero
       if(!isNaN(numeroInserito)){

        //se il valore inserito è un numero metto in msg il valore o il valore aumentato di uno se è dispari
            msg = (isEven(numeroInserito)) ? numeroInserito : numeroInserito + 1;            
       } else {           

           //se il valore inserito non è un numero im msg metto il messaggio di errore
            msg = 'Non hai inseriro un numero'
      }

       //chiamo la funzione che stampa i risultati
       printResult(msg);
    
    }


    /**
     * Stampa i risultati
     * @param {String} message 
     */
    function printResult(message){
        //definisco la classe da utilizzare per il div se messaggio è un numero success altrimenti danger
        let alertColor = isNaN(message) ? 'alert-danger' : 'alert-success';

        //aggiungo la classe al div
        resultEl.classList.add(alertColor);
         //rimuovo la classe d-none per far visualizzare il div
        resultEl.classList.remove('d-none');
        //inserisco il messaggio nel div
        resultEl.innerText = message;
    }
      
    function resetForm(){
        //pulisco l'input
        inputEl.value = '';
        // rimuovo le classi
        resultEl.classList.remove('alert-danger');
        resultEl.classList.remove('alert-success');
        //aggiungo la classe d-none per nascondere il div
        resultEl.classList.add('d-none');
    }
}

//IIFE
// (function(){
   
// })();