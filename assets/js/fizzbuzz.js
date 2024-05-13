let numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (let i = 0; i < numeros.length; i++){
    if ( numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
        console.log(numeros[i], "Fizzbuzz")
    }
    else if (numeros[i] % 3 === 0){
        console.log ( numeros[i],"Fizz")
    } else if (numeros[i] % 5 === 0) {
        console.log ( numeros[i],"Buzz")
    }else {
        console.log(numeros[i])
    }
}