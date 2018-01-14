/*
Logic Challenge - Perkalian Unik
Problem
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka.
Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri.
Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24],
karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.

Code
*/
//1. inisialisasi sebuah penampung
//2. membaca dan mengambil angka
  //2.1 membuat perulangan sebuah parameter arr
  //2.2 membuat perulangan sebuah parameter arr dengan index untuk membaca dan mengambil angka
    //2.2.1 jika index angka 1 bukan index angka 2 maka angka dikalikan dengan nila angka lainnya
    //2.2.2 masukan hasil perkalin tersebut di penampung hasilHitung
//3. return hasil

//code disini
function perkalianUnik(arr) {
  var hasil = [];
  for (var x = 0; x < arr.length; x++) {
    var angka= 1;
    for (var y = 0; y < arr.length; y++) {
      if (y !== x) {
        angka *= arr[y];
      }
    }
    hasil.push(angka);
  }
  return hasil;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
