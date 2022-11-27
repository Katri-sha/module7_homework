// Задание 3.

//Написать функцию, которая создает пустой объект, но без прототипа.

function createNewObj (){
    return Object.create(null);
}
console.log (createNewObj());