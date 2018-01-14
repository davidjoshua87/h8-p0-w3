/*
Problem
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka.
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome.
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

Code
*/
  //1. sebuah parameter berupa num akan dicek sebagai Palindrome
  //1.1 jika num kurang dari 7 maka nilai palindrom adalah return 8
  //1.2 jika num lebih dari sama dengan 7 maka
    //1.2.1 membuat perulangan dengan index i,
          // dengan i kurang dari nilai num dengan
          // pertambahan satu untuk membuat angka baru sebagai pembanding
    //1.2.2 inisialisasi variable numString sama dengan String num
    //1.2.3 inisialisasi variable string sebagai angka pembanding
    //1.2.4 membuat perulangan index j sama dengan numString.length-1
          // dengan j lebih dari sama dengan nol dengan
          // pertamhana satu
          // maka ditampung di variable string
    //1.2.5 jika nilai numString sama dengan nilai string maka
          // return num
//code disini

function angkaPalindrome(num) {
  if (num < 7) {
    return 8;
  } else
  if (num >= 7) {
    for (var i = 0; i < num; i++) {
      num++;
      var numString = String(num);
      var string = '';
      for (var j = numString.length - 1; j >= 0; j--) {
        string += numString[j];
      }
      if (numString === string) {
        return num;
      }
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
