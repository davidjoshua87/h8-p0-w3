/*
Logic Challenge - Tentukan Deret Geometri
Problem
Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka.
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri.
Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian.
Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).

Code
*/
//1. sebuah array berisi angka
//2. inisialisasi
  //2.1. variable pembanding beruba nila array index 1 dibagi array index 0
  //2.1. variabel pembagi sama dengan nol
//3. membuat array baru dengan perulangan diindex i sama dengan nol
    // dengan i kurang dari arr.length-1 dan pertambhan satu
    // maka masukan nilai arry baru di variable pembagi berupa
    // array index [i+1] dibagi array [i]
//4. return true apabila nilai dari array pembanding sama dengan nilai dari array pembagi

//code disini
function tentukanDeretGeometri(arr) {
  var pembanding = arr[1] / arr[0];
  var pembagi = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    pembagi = arr[i] / arr[i - 1];
  }
  return (pembanding === pembagi);
}


// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
