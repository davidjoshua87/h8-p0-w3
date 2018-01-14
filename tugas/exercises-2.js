/*Logic Challenge - Balik Kata
Problem
Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe",
function akan me-return "eoD nhoJ".

Code
*/
//1. inisialisasi
//1.1 ketikan sebagai variable
//1.2 hasil sebagai variable
//2. membuat kata balik dengan perulangan variable ketikan parameter kata.length-1 pertambahan satu
  //2.1. masukan kata baru di hasil
//3. return hasil dari pembalikan kata

//code disini
function balikKata(kata) {
  var hasil = '';
  for (var ketikan = kata.length - 1; ketikan >= 0; ketikan--) {
    hasil += kata[ketikan];
  }
  return hasil;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
