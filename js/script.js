


// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

function rage() {

    const numeri = [1,2,3,4,5,6,7,8,9,];
    const a = 2;
    const b = 7;

  //   La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.    
  const numeriRange = [];

    numeri.forEach((element) => {

        if (a === element || b === element) {

            numeriRange.push(element);

        }
           
    });

    return numeriRange;
}

    console.log(rage());



//FUNCTION

// function rage(array, min, max) {
//     var newItems = [];
//     for(var i = min - 1; i < max; i++ ){
//         newItems.push(array[i]);
//     }
//     return newItems;
// }