// Competencies: Functions and Arrays
/*

Instruksi
=========
Buatlah beberapa function berikut:

1. multiplication, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan mengalikan dua angka dan mereturn hasil perkaliannya.
  contoh
  ------
  input: multiplication(3, 6)
  output: 18

2. powerMe, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan memangkatkan num1 dengan num2 (num1 dipangkat dengan num2) dan mereturn hasil perpangkatannya.
  Boleh menggunakan sintaks Math.pow
  contoh
  ------
  input: powerMe(2, 3)
  output: 8

3. evenSiblings, yang menerima satu parameter berupa angka, dimana setiap angka yang dimulai dari 1 menuju angka tersebut, semua angka yang genap masuk ke dalam array.
Return array tersebut.

  contoh
  ------
  input: evenSiblings(15)
  proses: dari 0 - 15 yang habis dibagi 2: 2, 4, 6, 8, 10, 12, 14
  output: [2, 4, 6, 8, 10, 12, 14]
*/

function multiplication(num1, num2) {
  // hanya code disini
  return num1 * num2;
}
console.log(multiplication(3, 6));//18

function powerMe(num1, num2) {
  // hanya code disini
  return Math.pow(num1, num2);
}
console.log(powerMe(2, 3));//8

function evenSiblings(num) {
  // hanya code disini
  var arrGenap = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      arrGenap.push(num[i]);
    }
  }
  return arrGenap;
}

console.log(evenSiblings([2, 4, 6, 8, 10, 12, 14])); //[2, 4, 6, 8, 10, 12, 14]
