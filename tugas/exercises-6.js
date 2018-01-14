/*
Logic Challenge - Palindrome
Problem
Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome,
dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

Code
*/
//1. inisialisasi
//1.1 variable reverse
//2. membuat dan membaca kata balik dengan perulangan parameter kata.length-1
//3. mereturn true kata balik sama dengan parameter kata 

//code disini
function palindrome(kata) {
  var reverse = '';
  for (var x = kata.length - 1; x >= 0; x--) {
    reverse += kata[x];
  }
  return reverse === kata;
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
