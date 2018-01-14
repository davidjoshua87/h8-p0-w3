/*
Logic Challenge - Tentukan Deret Aritmatika
Problem
Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka.
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika.
Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten.
Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9]
bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

Code
*/
//1. sebuah array berisi angka
//2. inisialisasi
  //2.1. variable pertambahan beruba nila array index 1 - array index 0
  //2.1. variabel selisih sama dengan nol
//3. membuat array baru dengan perulangan diindex i sama dengan nol
    // dengan i kurang dari arr.length-1 dan pertambhan satu
    // maka masukan nilai arry baru di variable selisih berupa
    // array index [i+1]-array [i]
//4. return true apabila nilai dari array pertambahan sama dengan nilai dari array selisih

//code disini

function tentukanDeretAritmatika(arr) {
  var increse = arr[1] - arr[0];
  var selisih = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    selisih = arr[i + 1] - arr[i];
  }
  return increse === selisih;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
