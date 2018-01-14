/*
Logic Challenge - Menghitung Jumlah Kata
Problem
Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter berupa string yang merupakan sebuah kalimat.
Function akan mengembalikan jumlah kata dari kalimat tersebut.
Contoh, "I have a dream" akan menghasilkan nilai 4, karena memiliki 4 kata.

Code
*/
//1. inisialisasi
//1.1 kalimat akan dipotong dengn space dimasukan divariable kalimat baru
//1.1 tampung kata-kata tersebut
//2. hitung jumlah kata tersebut
  //2.1 menghitung kata-kata dengan perulangan sepanjangn kalimat baru dengan pertambahan satu
//3.return hasil hitung

//code disini
function hitungJumlahKata(kalimat) {
  var kalimatSplit = kalimat.split(' ');
  var hasilHitung = 0;
  for (var x = 0; x < kalimatSplit.length; x++) {
    hasilHitung += 1;
  }
  return hasilHitung;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
