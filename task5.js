//Задание №5 (Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.)
const arr = [45, "tree", false, 144, 'Kate', true];
console.log(arr.length +" " + "Элементов в массиве");
let result = arr.reduce(function (res, item, index, array){
 return console.log( item);
}, 0);

