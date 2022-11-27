// Задание 2.

/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

function checkStr (str, obj) {
    console.log(str in obj);
}
let name = "Katty";
let flow = {
    Prue: 1,
    Jack: 2
}
checkStr (name, flow);