//Задание 1.

/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/ 

function showOwnKeys (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(`${key} - ${obj.[key]}`);
        }
    }
}
let obj1 = {
    city: "Paris",
    country: "France"
};
let obj2 = Object.create(obj1);
obj2.name = "Katty";
obj2.age = 28;
showOwnKeys(obj2);