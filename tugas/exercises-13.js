/*
Logic Challenge - Target Terdekat
Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', '', 'o', '', '', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code
*/
//1. inisialisasi sebuah fuction dengan parameter array
  //1.1 buat variable index1 sama dengan nol
  //1.2 buat variable index2 sama dengan nol
  //1.3 buat variable tampung sama dengan nol
  //1.4 buat variable kosong array
  //1.5 buat variable hasilakhir
//2. pengecekean isi parameter array
    //2.1 jika nilai karakter x pada array sama dengan kosong
        //maka return nilai 0
    //2.2 jika nilai karakter x pada array terdapat
        //maka buat perulangn untuk membaca karakter x dan o pada array
        //dengan index i sama dengan nol, pada arr.length dengan pertambhan satu
        //2.2.1 buat kondisi dimana arr[i] sama dengan karaketer x
              //maka isi pada variable arrX dengan index satu sama dengan i
        //2.2.2 lanjutkan lainnya buat kondisi dimna arr[i] sama dengan karakter o
              //maka isi pada variable arrX dengan index satu sama dengan i
        //2.2.3 inisialisasi variable hasil berupa array kosong
        //2.2.4 buat perulangn dengan index j dimana j kurang dari arrX.length
              //dengan pertambahan satu
              //dimana pada variable tampung merupakan hasil perhitungan absolut index2-nilai array index [j]
              //lalu dimasukkan hasil perhitungan pada variable hasil
              //lalu hasilnya diurutkan
        //2.2.5 hasilakhir sama dengan nilainya dengan hasil
    //2.3 return nilai hasilakhir pada index [0]

//code disini
function targetTerdekat(arr) {
  var index1 = 0;
  var index2 = 0;
  var tampung = 0;
  var arrX = [];
  var hasilakhir;

  if (arr.indexOf('x') === -1) {
    return 0;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        index1 = i;
        arrX.push(index1);
      } else if (arr[i] === 'o') {
        index2 = i;
        arrX.push(index1);
      }
      var hasil = [];
      for (var j = 0; j < arrX.length; j++) {
        tampung = Math.abs(index2 - arrX[j]);
        hasil.push(tampung);
        hasil.sort();
      }
      hasilakhir = hasil;
    }
    return hasilakhir[0];
  }
}


// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
