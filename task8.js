// Задание №8 Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
let myMap = new Map();
myMap.set(1, "Monday");
myMap.set(true, "true");
myMap.set("one", 1);

for (let name of myMap.keys()){
    let value = myMap.get(name);
    console.log(`Ключ - ${name}, зничение - ${value}`);
}


