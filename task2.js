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