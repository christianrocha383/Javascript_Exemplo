/*

Gerando um novo array só com números ímpares e exibindo no console.

*/

function map () {
    const randomNumbers = [10, 30, 15, 25, 50, 40, 5]
    const changeNumbers = randomNumbers.filter(numbers => numbers % 2)
    console.log(changeNumbers)
    }    
