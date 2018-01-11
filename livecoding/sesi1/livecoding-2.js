// Competencies: Loopings
/*
=============
Number Ladder
=============

Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:

contoh 1 (height = 3):
1
12
123

contoh 2 (height = 5):
1
12
123
1234
12345

contoh 3 (height = 1):
1

tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
/*contoh 1 (height = 3):
1
12
123*/

var height = 3; // isi dengan nilai tinggi tangga!
var hasil ='';

for (var i=1; i<= height; i++){
  for (var j=1; j<=i; j++){
  hasil += j+'';
  }
  console.log(hasil);
  hasil = '';
}

/*contoh 2 (height = 5):
1
12
123
1234
12345*/

var height = 5; // isi dengan nilai tinggi tangga!
var hasil ='';

for (var i=1; i<= height; i++){
  for (var j=1; j<=i; j++){
  hasil += j+'';
  }
  console.log(hasil);
  hasil = '';
}

/*contoh 3 (height = 1):
1*/

var height = 1; // isi dengan nilai tinggi tangga!
var hasil ='';

for (var i=1; i<= height; i++){
  for (var j=1; j<=i; j++){
  hasil += j+'';
  }
  console.log(hasil);
  hasil = '';
}
