//7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

/*
Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
 Öğrenci 2: Ada Bilgi 2012 (80,80,90)
 Öğrenci 3: Ahmet Turan 2009 (60,60,70)

 */
let ogr1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
// let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
// let ogr3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];

let ogrenciler = [ogr1, ogr2, ogr3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

console.log(yigit_yas);
console.log(ada_yas);
console.log(ahmet_yas);

let yigit_not = (
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) /
  3
).toFixed(2);
let ada_not = (
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) /
  3
).toFixed(2);
let ahmet_not = (
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) /
  3
).toFixed(2);

console.log(yigit_not);
console.log(ada_not);
console.log(ahmet_not);

// let ogrenciler = [
//   ["Yiğit", "Bilgi", 2010, [70, 60, 80]],
//   ["Ada", "Bilgi", 2012, [80, 80, 90]],
//   ["Ahmet", "Turan", 2009, [60, 60, 70]],
// ];
// for (let i = 0; i < ogrenciler.length; i++) {
//   let notlar = ogrenciler[i][3];
//   let ortalama = (notlar[0] + notlar[1] + notlar[2]) / 3;
//   console.log(
//     "Öğrenci " +
//       (i + 1) +
//       " - " +
//       ogrenciler[i][0] +
//       " " +
//       ogrenciler[i][1] +
//       ", " +
//       (new Date().getFullYear() - ogrenciler[i][2]) +
//       " yaşında, not ortalaması: " +
//       ortalama.toFixed(2)
//   );
// }
// const isimler = ["ali", "veli", "deli"];
// const array = [1, 2, 3];

// let newArray = [];
// for (let i = 0; i < isimler.length; i++) {
//   newArray = isimler.map((isim) => `${isimler[i]} = ${array[i]}`);
//   //   newArray = `${isimler[i]} = ${array[i]}`;
// }
// console.log(newArray);
// // for (let i = 0; i < isimler.length; i++) {
// //   console.log(`${isimler[i]} = ${array[i]}`);
// // }

// const isimler = ["ali", "veli", "deli"];
// const array = [1, 2, 3];
// for (let i = 0; i < isimler.length; i++) {
//   let newArray = [];
//   for (let j = 0; j < array.length; j++) {
//     newArray = [i] + "-" + [j];
//   }
// }
// console.log(newArray);

// const isimler = ["ali", "veli", "deli"];
// const array = [1, 2, 3];
// const newArray = isimler.reduce(
//   (obj, key, i) => ({ ...obj, [key]: array[i] }),
//   {}
// );
// console.log(newArray);
