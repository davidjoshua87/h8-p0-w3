/*
Logic Challenge - Pasangan Angka Terbesar
Problem
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut.
Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

Code
*/

//code disini
function pasanganTerbesar(num) {
  var str = String(num);
  var angka;
  var banding = 0;
  for (var i = 0; i < str.length; i++) {
    angka = Number(str[i] + str[i + 1]);
    console.log(angka);
    if (angka > banding) {
      banding = angka;
    }
  }
  return banding;
}

function pasanganTerbesar(num) {
  // you can only write your code here!
  var newNumber = num.toString().split('');

  var newArr = [];
  for (var i = 0; i < newNumber.length - 1; i++) {
    var checkNumber = newNumber[i] + newNumber[i + 1];
    newArr.push(checkNumber);
  }
  return newArr.sort(function(a, b) {
    return b - a;
  })[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
