//Задание 5.

//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalDevices{
    constructor(options){
      this.type = options.type;
      this.power = options.power;
      this.position = options.position;
    }
    onOff (){
      if (this.position === 'on') {
        console.log(`It is enable`)
      } else console.log(`It is disable`);
    }
  }
  class Lamp extends ElectricalDevices {
  constructor (options){
    super(options);
    this.place = options.place;
  }
    switch () {
      console.log(`Switch on the ${this.place}`)
    }
  }
  class Comp extends ElectricalDevices{
    constructor(options){
    super (options);
    this.nameOS = options.nameOS;
    }
    operatingSystem (){
      if (this.nameOS === 'no' || this.nameOS === '') {
        console.log('noOS')
      } else console.log(this.nameOS)
    }
  }
  const notebook = new Comp({
    type: 'notebook',
    power: 100,
    position: 'on',
    nameOS: 'no'
  });
  console.log(notebook)
  notebook.onOff();
  notebook.operatingSystem();
  
  const desctopLamp = new Lamp({
    type: 'desctop Lamp',
    power: 5,
    position: 'off',
    place: 'body'
  })
  console.log(desctopLamp)
  desctopLamp.onOff();
  desctopLamp.switch();