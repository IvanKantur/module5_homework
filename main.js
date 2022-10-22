//Задание №1 (проверка введённого числа на чётность или нечётность, если введено не число, то ошибка.)
let num = +prompt('Введите число:'); //
if (isNaN(num)){
    console.log('Упс, вы ошиблись')
} else{
    if ((num % 2) == 0){
        console.log('Число чётное')
    } else {
        console.log('Число нечётное')
    }
}

//Задание №2 (Определение типа переменной х)
let x = "null";
 switch(typeof x) {
     case ("number"):
         console.log('X - число');
         break;
     case "string":
         console.log('X - строка');
         break;
     case "boolean":
         console.log('X - логический тип');
         break;
     default:
         console.log('Тип x не определён');
}

//Задание №3 (Вернуть отзеркаленную строку)
let str = "А роза упала на лапу Азора"
str = str.split('').reverse().join("");
console.log(str);

//Задание №4 (Записать в переменную случайное целое число в диапазоне [0; 100].)
console.log(Math.floor(Math.random() * 100) + 1);

//Задание №5 (Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.)
const arr = [45, "tree", false, 144, 'Kate', true];
console.log(arr.length +" " + "Элементов в массиве");
let result = arr.reduce(function (res, item, index, array){
 return console.log( item);
}, 0);

// Задание №6  Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
const array1 = [1, 1, 6, 1, 3, 1];
const isElementsSame = (currentValue) => currentValue == array1[0];
if (array1.every(isElementsSame)){
    console.log('true')
} else{
    console.log('false')
}

// Задание №7 Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
const arr = [0,"dgbg", 6, null, 3, 0, NaN, 3, 12,14, NaN, null];
let countOdd =0;
let countHonest = 0;
let countZero = 0;
let countElse = 0;
arr.forEach(function (value, index, array){
    if (isNaN(value)||(value === null)){
        countElse++;
        return {countElse};
    } else{
        if (value === 0){
            countZero++;
            return {countZero};
        }
        if ((value % 2) == 0){
            countHonest++;
            return {countHonest};
        } else {
            countOdd++;
            return {countOdd};
        }
    }
})
console.log(`Нечётных чисел: ${countOdd};` +' '+ `Чётных чисел: ${countHonest}` +' '+ `Нулей: ${countZero}`)
console.log(`Элементов не являющихся числами: ${countElse} штук.`)
