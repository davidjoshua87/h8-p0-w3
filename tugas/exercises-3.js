/*
Logic Challenge - Konversi Menit
Problem
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit.
Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
Contoh, jika menit adalah 63, maka function akan me-return "1:03".

Code
*/
//1. inisialisasi
  //1.1 var jam= menit/60
  //1.2 var sisa menit sama dengan bagi hasil Menit
  //1.3 var jam yang bulet sama dengan pembulatan jamYangDibulatkan
//2. jika sisa menit kurang dari 10 maka tambahkn nol di depannya
//3. masukan hasil jam yang dibulatkan ditambah Menit
//4. return hasil

//code disini
function konversiMenit(menit) {
  var jam = menit / 60;
  var sisaMenit = menit % 60;
  var jamYangDibulatkan = Math.floor(jam);
  var nol = '';
  if (sisaMenit < 10) {
    nol += '0';
  }

  var hasil = jamYangDibulatkan + ':' + nol + sisaMenit;
  return hasil;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
