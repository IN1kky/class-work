// Начало задания 1 - ___________________________________________________________________________________________________________

// class Vehicle 
// {
//    constructor(model,speed)
//    {
//     this.model = model;
//     this.speed = speed;
//    } 
//    printV()
//    {
//     console.log(`Модель: ${this.model}.\nМакс. скорость: ${this.speed} км/ч`)
//    }
// }

// class Bicycle extends Vehicle
// {
//     constructor(model,speed,brakesType,NumSpeeds)
//     {
//         super(model,speed)
//         this.brakesType = brakesType;
//         this.NumSpeeds = NumSpeeds;
//     }
//     printB()
//     {      
//         super.printV();
//         console.log(`Тормоза: ${this.brakesType}.\nКоличество скорстей: ${this.NumSpeeds}`)
//     }
// }

// class Car extends Vehicle
// {
//     constructor(model,speed,NumDoors,EngineType)
//     {
//         super(model,speed)
//         this.NumDoors = NumDoors;
//         this.EngineType = EngineType;
//     }
//     printC()
//     {
//         super.printV();
//         console.log(`Количество дверей: ${this.NumDoors}\nТип двигателя: ${this.EngineType}`)
//     }
// }


// let bike = new Bicycle("STERN",80,"Барабанные",18);
// bike.printB();
// let auto = new Car("Tesla 3", 260, 4, "Electro");
// auto.printC();

// Конец задания 1 - ____________________________________________________________________________________________________________

// Начало задания 2 - ___________________________________________________________________________________________________________

// class Asset
// {
//    constructor(name,cost)
//    {
//     this.name = name;
//     this.cost = cost;
//    } 
//    printV()
//    {
//     console.log(`Название: ${this.name}.\nСтоимось: ${this.cost}`)
//    }
// }

// class FinancialAsset extends Asset
// {
//     constructor(name,cost,stonks,TypeInvent)
//     {
//         super(name,cost)
//         this.stonks = stonks;
//         this.TypeInvent = TypeInvent;
//     }
//     printB()
//     {      
//         super.printV();
//         console.log(`Доходность: ${this.stonks}.\nТип инвестиций: ${this.TypeInvent}`)
//     }
// }

// class RealAsset extends Asset
// {
//     constructor(name,cost,adress,TypeActive)
//     {
//         super(name,cost)
//         this.adress = adress;
//         this.TypeActive = TypeActive;
//     }
//     printC()
//     {
//         super.printV();
//         console.log(`Адрес: ${this.adress}\nТип актива: ${this.TypeActive}`)
//     }
// }


// let Assetss = new RealAsset("TeslaMotors",1500,"Tokyo","Obligacia");
// Assetss.printC();

// Конец задания 2 - ____________________________________________________________________________________________________________

// Начало задания 3 - ___________________________________________________________________________________________________________

class Animal
{
   constructor(Vid,sreda)
   {
    this.Vid = Vid;
    this.sreda = sreda;
   } 
   printV()
   {
    console.log(`Название: ${this.Vid}.\nСреда обитания: ${this.sreda}`)
   }
}

class Mammal extends Animal
{
    constructor(Vid,sreda,eater,multymal)
    {
        super(Vid,sreda)
        this.eater = eater;
        this.multymal = multymal;
    }
    printB()
    {      
        super.printV();
        console.log(`Тип питания: ${this.eater}.\nМетод размножения: ${this.multymal}`)
    }
}

class Bird extends Animal
{
    constructor(Vid,sreda,typego,gnezdo)
    {
        super(Vid,sreda)
        this.typego = typego;
        this.gnezdo = gnezdo;
    }
    printC()
    {
        super.printV();
        console.log(`Тип передвижения: ${this.typego}\nМесто гнездования: ${this.gnezdo}`)
    }
}


let kolibri = new Bird("Колибри","South America","Fly","Anything");
kolibri.printC();

let корова = new Mammal("Корова","Сарай","Травоядное","Спаривание(?)");
корова.printB();

// Конец задания 3 - ____________________________________________________________________________________________________________

