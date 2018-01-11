// Competencies: Functions and Arrays
/*

Instruksi
=========
Buatlah beberapa function berikut:

1. remainder, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan mendapatkan sisa bagi num1 dengan num2 dan mereturn sisa bagi-nya. Note. sisa bagi berbeda dengan hasil bagi!
  contoh
  ------
  input: remainder(7, 3)
  output: 1

2. concats, yang menerima tiga parameter berupa str1, str2, dan str3. Function tersebut akan menggabungkan ketiga string tersebut dengan simbol '-' sebagai pemisah, dan me-return hasil penggabungannya.
  TIDAK BOLEH menggunakan sintaks .join!
  contoh
  ------
  input: concats('i', 'am', 'developer')
  output: 'i-am-developer'

3. removeOdds, yang menerima satu parameter berupa array yang berisi angka, dimana function akan me-return sebuah array baru yang hanya mengambil semua angka genap nya saja.

  contoh
  ------
  input: removeOdds([1, 3, 5, 6, 8, 7, 2, 4])
  proses: dari isi array, yang habis genap: 6, 8, 2, dan 4
  output: [6, 8, 2, 4]
*/

function remainder(num1, num2) {
  // hanya code disini
  var hasil = (num1 % num2);
  return hasil;
}
console.log(remainder(7, 3));


function concats(str1, str2, str3) {
  // hanya code disini

  var gabungkata = str1 + "-" + str2 + "-" + str3;
  return gabungkata;
}
console.log(concats("i", "am", "developer"));


function removeOdds(numArr) {
  // hanya code disini
  var arrGenap = [];
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      arrGenap.push(numArr[i]);
    }
  }
  return arrGenap;
}

console.log(removeOdds([1, 3, 5, 6, 8, 7, 2, 4]));
