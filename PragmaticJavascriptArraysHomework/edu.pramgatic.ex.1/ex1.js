/**
 * Created by Denislav on 18.6.2016 г..
 Напишете програма, която обръща думите в дадено изречение в обратен ред.
 Например изречението "Брала мома къпини." трябва да се преобразува в "Къпини мома брала."
 */
var text = prompt('Please enter text');
var reverse = text.split(/[\s,]/).reverse().join(' ');
console.log(reverse);

