// Objek destructuring---
// bisa jg digabung dgn Rest Operator/Parameter
// jika isi objek yg akan ditangkap tidak diketahui jumlahnya,
// akan menghasilkan objek lagi.
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

let localFirstName = "Ryan";
let localLastName = "Noobie";
let localAge = 30;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

// Assignment tanpa deklarasi object yg menampung/ditampung
// ({
//     firstName: localFirstName,
//     lastName: localLastName,
//     age: localAge
// } = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// });

// jika objeknya ada (sama saja)
({
    firstName: localFirstName,
    lastName: localLastName,
    age: localAge
} = profile);

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);



// Array destructuring---
// (bisa utk swap item dan menangkap return value pada function)
const favorites = ["Seafood"];

const [myFood, herFood = "Salad"] = favorites

console.log(myFood);
console.log(herFood);



// Spreading operator---
const numbers = [12, 32, 90, 12, 32];


console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])); // tanpa spreading operator

console.log(Math.max(...numbers)); // spreading operator


// const makanan = ["Seafood", "Salad", "Nugget", "Soup"];
// console.log(...makanan);
// diatas sama dengan console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// menggabungkan 2 array menjadi 1
const makanan = ["Seafood", "Salad", "Nugget", "Soup"];
const lainnya = ["Cake", "Pie", "Donut"];

const allMakanan = [...makanan, ...lainnya]
console.log(allMakanan);



// Rest operator---
// dalam membuat variadic function
function sum(...numbers) {
    var result = 0;
    for (let number of numbers) {
        result += number
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5));

// dalam membuat pengelompokkan nilai array
const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items); // variabel items berupa array



/* 
    dari WPU
    Mengambil field pada object, setelah dikirim sebagai parameter
    untuk function (destructuring objek)
*/

const mhs = {
    id: 123,
    nama: 'Sandhika Galih',
    umur: 33,
    email: 'sandhikagalih@unpas.ac.id'
}

// function getIdMhs({ id }) {
//     return id;
// }

function getIdNamaMhs({
    id,
    nama
}) {
    result = nama + ', ' + id;
    return result;
}

// console.log(getIdMhs(mhs));
console.log(getIdNamaMhs(mhs));