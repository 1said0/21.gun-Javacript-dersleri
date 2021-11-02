/* PRIMITIVE DATA TYPES
Number
String
Boolean
Undefined
Null
*/
var name = 'Arin';
console.log(typeof name);
var age = 3;
console.log(typeof age);
var isStudent = false;
console.log(typeof isStudent);
var sample;
console.log(typeof sample);
var sampleNull = null;
console.log(typeof sampleNull);
age = 'three';
console.log(typeof age);

var number1, number2, sum;
number1 = prompt("Ilk Rakamı Giriniz");
number2 = prompt("Ikinci Rakamı Giriniz");
sum = parseInt(number1) + parseInt(number2);
alert("Toplam = "+ sum);
