"use strict";

const container = document.getElementById("tabellone");

//stampo 100 numeri col for
for(let i = 1; i<=100; i++) {
    if (i % 3 == 0 || i % 5 == 0){
        //aggiungo condizione fizzbuzz
        if (i % 3 == 0 && i % 5 == 0) {
            const element = document.createElement('div');
            element.classList.add('fizzbuzz-square');
            element.innerHTML = i;
            container.append(element);
        }
        //aggiungo condizione fizz
        if (i % 3 == 0) {
            const element = document.createElement('div');
            element.classList.add('fizz-square');
            element.innerHTML = i;
            container.append(element);
        }
        //aggiungo condizione buzz
        if (i % 5 == 0) {
            const element = document.createElement('div');
            element.classList.add('buzz-square');
            element.innerHTML = i;
            container.append(element);
        }
    } else {
        //altrimenti stampo numero normale
        const element = document.createElement('div');
        element.classList.add('standard-square');
        element.innerHTML = i;
        container.append(element);
    }    
    
}