'use strict'

// let numberFirst = Number (prompt("enter first number = "));
// let numberSecond = Number (prompt("enter second number = "));

// let a, b, c;

// sum = numberFirst + numberSecond;
// a = numberFirst - numberSecond;
// b = numberFirst / numberSecond;
// c = Math.pow(numberFirst, numberSecond );
// let t = 4;
// j = Math.sqrt(t);


// console.log(sum);
// console.log(a);
// console.log(b);
// console.log(j);

let random = Math.floor(Math.random(2) * 100+1)
alert("Sizda hozir random sonlari chiqishni boshlaydi 😊")
alert("Random orqali chiqan son: " + random)
confirm("Biz random sonni 2ga ko'paytirmoqchi va bo'lmoqchimiz !")
// alert("Random orqali chiqan son:" + Math + "edi \n biz uni 2 ga bo'lib 44 sonni chiqardik, \n va shu sonni 2 ga bo'lib: 11 sonini  chiqardik, \n va shu sonni 3 ga bo'lgandagi qoldiq: 1 sonini chiqardik")


let kupaytiruv = random * 2 ;
let buluv = random / 2;
let qoldiq = random % 3;
alert('Random orqali chiqqan son:' + random + '\n biz uni ikkiga kupaytirib ' + kupaytiruv  + 'chiqardik\n' + ' biz uni 2 ga bolib' + buluv + " chiqardik\n" + ' va shu sonni 3 ga bolgandagi qoldiq:' + qoldiq + 'sonini chiqardik');