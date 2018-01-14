/*
Logic Challenge - X dan O
Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o,
dan false jika tidak.

Code
*/
// 1. inisialisasi
// 1.1 var deretO dan var deretX
// 2. membuat deretO dan deretX dengan perulangan parameter str.length dengan pertambahan satu
  // 2.1 jika parameter str sama dengan karakter x maka pertambahan satu deretX,
  // 2.2 jika parameter str sama dengan karakter o maka pertambahan satu deretO
// 3. return true apabila deretO sama dengan deretX

//code disini
function xo(str) {
  var deretX = 0;
  var deretO = 0;
  for (var k = 0; k < str.length; k++) {
    if (str[k] === 'x') {
      deretX++;
    }
    if (str[k] === 'o') {
      deretO++;
    }
  }
  return deretX === deretO;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
