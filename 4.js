//Задание 4.

/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

function ElectricalDevices(power){
    this.power = power;
    this.onOff =  function(position){
     if (position === 'on') {
       console.log(`It is enable`)
     } else console.log(`It is disable`)
    }
}
function Lamp(name){
    this.name = name;
    this.switch = function(place) {
        console.log(`Switch on the ${place}`)
    }
}
function Comp(type){
    this.type = type;
    this.operatingSystem = function (name){
       if (name === 'no' || name === '') {
         console.log('noOS')
       } else console.log(name)
    }
}
Lamp.prototype = new ElectricalDevices(5);
Comp.prototype = new ElectricalDevices(100);
const notebook = new Comp('notebook');
const desctopLamp = new Lamp('desctop Lamp');
console.log(notebook);
notebook.onOff('on');
notebook.operatingSystem("");
console.log(desctopLamp);
desctopLamp.onOff ('off');
desctopLamp.switch('body')