
// Assignment Operatörler:
var x = "5";

var y = "5";
if (x===y ) {
alert("X ve Y birbirine eşittir");
} else {
alert("X ve Y birbirine eşit değildir");
}

// Decrement
var x = 4;
console.log(--x);
// Increment++
var x = 4;
console.log(x++);
console.log(x);

// Aritmetik Operatörler: + -*/
var x = 5;
console.log(x);
x += 6;
console.log(x);
x -= 4;
console.log(x);
x *= 3;
console.log(x);
x = 7;
console.log(x);
x = 4 + 3 * 5 - 6;
console.log(x);
// Modulus Operatörü %
var year = 2017;
var kalan = year % 5;
console.log(kalan);


// Decrement
var x = 4;
console.log(x--);
console.log(x);


/* IF / ELSE YAPISI */
/*
 if (koşul) {
    bunu yap
    } else
    diğerini yap
    */
    var x = 5;
    if ( x){
    console.log("X 4 ten buyuktur");
    }
    else if ( x < 4) {
    console.log("X 4 ten kucuktur");
    }
    else {
    console.log("X 4 e eşittir");
    }



    //
var x = 5;
if ( x > 4)
console.log("Bu ifade if in içerisindel");
console.log("Bu ifade if in içerisinde2");
console.log("Bu ifade if iniçerisinde3");









/* Mantıksal Operatörler */
// AND && önermelerin 2 side doğru olmalı
// OR || önermelerin 1 tanesi doğru
olmalı
// NOT ! true false çevrimi yapar
var age = 18;
if ( age >=20 && age <= 50) {
console.log("Uye Olabilirsiniz");
} else {
console.log("Uye Olamazsınız");
}
/* && AND Operatoru
dogru && dogru = dogru
yanlış && dogru = yanlış
dogru && yanlış = yanlış
yanlış && yanliş = yanlış
*/



var age = 28;
var job =' doktor';
if (job ==' doktor' || age >= 35) {
console.log("Uye Olabilirsiniz.");
}else {
console.log("Uye Olamazsınız.");
}


var isMarried = true;
if (!isMarried) {
console.log("Evlisiniz");
} else {
console.log("Evli değilsiniz");
}

var a = 4;
var b = -3;
var c = 6;
if (a>b && a>c) {
if (b>c) {
alert (a+""+ b + " " + c);
} else {
alert (a+""+ C +""+b);
}

else  if  (b>a && b>c) {
if (a>c) {
alert (b+ " " + a + " " + c);
} else {
alert (b+ " " + C + " " + a);
}
}
else if(c>a && c>b) {
if(a>b) {
alert (C+ " " + a + " " + b);
} else {
alert (c+ " " + b + " " + a);
}
 
}

var job = "";
switch (job) {
case "öğretmen" :
console.log("Ben bir öğretmenim");
break;
case "asker" :
console.log("Ben bir askerim");
break;
case "doktor" :
console.log("Ben bir doktorum");
break;
default :
console.log("Ben bir işsizim");
}
