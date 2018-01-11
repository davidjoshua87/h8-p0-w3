// Competencies: Functions + Loopings + Conditionals
/*

==============
Three Cols Box
==============

Instruksi
=========
Buatlah sebuah function bernama drawSymbolicRows yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()), dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris kelipatan 3. berurut sebagai berikut:

contoh 1 (drawSymbolicRows(3)):
baris-1: @
baris-2: $
baris-3: *

contoh 2 (drawSymbolicRows(7)):
baris-1: @
baris-2: $
baris-3: *
baris-4: $
baris-5: @
baris-6: *
baris-7: @

contoh 3 (drawSymbolicRows(1)):
baris-1: @

Note: baris dimulai dari 1.

tinggi kotak sesuai dengan nilai variable height!
*/

// Code here..

function drawSymbolicRows(row) {
  //code goes here!
  var kolom = '';
  var hasil = '';
  var i = 0;
  while (i < row) {
    i++;
    if (i % 3 === 0) {
      kolom = 'baris ke-'+ i + ': *';
    } else if (i % 2 === 1) {
      kolom = 'baris ke-'+ i + ': @';
    } else if (i % 2 === 0) {
      kolom = 'baris ke-'+ i + ': $';
    }
    console.log(kolom);
    hasil = '';
  }
  return hasil;

}
console.log(drawSymbolicRows(3));
console.log(drawSymbolicRows(7));
console.log(drawSymbolicRows(1));
