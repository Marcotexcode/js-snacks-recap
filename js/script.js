


// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numeri = [1,2,3,4,5,6,7,8,9,];
const a = 2;
const b = 7;





let range = rage(numeri,a,b);





function rage(arr,var1 , var2) {

    const numeriRange = [];

    arr.forEach((element,index) => {

        if (index >= var1 && index <= var2) {

            numeriRange.push( element);

        }
           
    });

    return numeriRange;
}




