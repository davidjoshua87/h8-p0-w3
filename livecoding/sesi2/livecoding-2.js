// Competencies: Loopings
/*
=================
Horizontal Series
=================

Instruksi
=========
  Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
  Disediakan variable max, dimana akan menampilkan deret pengurangan ke kanan hingga mencapai angka 1.
  Tampilkan deret sejumlah nilai max.
Buatlah sebuah deret angka horizontal dengan pola berikut:

contoh 1 (max = 3):
321
321
321

contoh 2 (height = 5):
54321
54321
54321
54321
54321

contoh 3 (height = 1):
1


Ketentuan
=========
Wajib menggunakan looping!




// SKELETON CODE (Code Sample)
var max = 3; // isi dengan nilai max!
*/
/*contoh 1 (max = 3):
321
321
321*/
var hasil = '';
var max = 3;
for (var index1 = 1; index1 <= max; index1++) {
  for (var index2 = max; index2 > 0; index2--) {
    hasil += index2 + '';
  }
  console.log(hasil);
  hasil = '';
}

/*contoh 2 (height = 5):
54321
54321
54321
54321
54321*/

var hasil = '';
var height = 5;
for (var index1 = 1; index1 <= height; index1++) {
  for (var index2 = height; index2 > 0; index2--) {
    hasil += index2 + '';
  }
  console.log(hasil);
  hasil = '';
}

/*contoh 3 (height = 1):
1*/
var hasil = '';
var height = 1;
for (var index1 = 1; index1 <= height; index1++) {
  for (var index2 = height; index2 > 0; index2--) {
    hasil += index2 + '';
  }
  console.log(hasil);
  hasil = '';
}
