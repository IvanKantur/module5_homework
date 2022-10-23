// Задание №6  Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
const array1 = [1, 1, 6, 1, 3, 1];
const isElementsSame = (currentValue) => currentValue == array1[0];
if (array1.every(isElementsSame)){
    console.log('true')
} else{
    console.log('false')
}