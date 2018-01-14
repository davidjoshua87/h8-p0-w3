/*Logic Challenge - Perpangkatan Dua
Problem
Diberikan sebuah function perpangkatanDua(angka) yang menerima satu parameter berupa angka.
Function akan me-return n jika angka tersebut merupakan hasil dari dua pangkat n.
jika tidak, return -1. Contoh, jika angka adalah 16, dan karena 2^4 adalah 16,
maka function akan me-return 4. Contoh kedua, jika angka adalah 17,
karena 17 bukan merupakan hasil perpangkatan angka 2, maka function akan me-return -1.

Code

*/
//1. Sebuah angka adlah perulangan perpangkatn nilai 2 dengan index n
  //1.1 jika angka sama dengan perpangkatan 2 dengan index n, maka return n
//2. jika bukan return -1

//code disini
function perpangkatanDua(angka) {
  for (var n = 0; n < angka; n++) {
    if(Math.pow(2, n) === angka) {
      return n;
    }
  }return -1;
}

console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0