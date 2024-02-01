// const array = ["Tom","Harry","Ron","Ivan","Andrey","Kolya","Egor","Oleg","Vlad"];

// for (let i = 0; i < array.length; i++)
// {
//     let result = array[i];
//     console.log(result);
// }

                                                                                                                ///////////////////////////////////
// const people = [ ["Tom", 23] , ["Ron", 30] , ["Ivan", 17],["Denis", 17], ["Bob", 25]];

// for (let i = 0; i < people.length; i++)
// {
//     for (let y = 0; y < people[i].length; y++)
//     {
//         result = people[i][y];
//         console.log(result);
//     }
//     console.log("\n")
// }

                                                                                                                ///////////////////////////////////
// const person = { name: "Tom",age:23 }
// //console.log(person["name"]);

    

// for(prop in person)
// {
//     let result = person[prop]
//     console.log(prop, result)
// }

// const student = {Имя:"Иван", Возраст: 20, Группа: "ССП-1-22М", Kypc: 3, Заведение: "BTK", Специальность: "Программист", Приоритет: "Windows Forms"}
// console.log("---------------------------------------------")
// for (atr in student)
// {
//     let result1 = student[atr]
//     console.log("|\t",atr,"\t\t", result1,"\t|")
//     console.log("---------------------------------------------")
// }
                                                                                                                ///////////////////////////////////
// const studentsArray = 
// [
// { Имя:"Иван", Возраст: 20, Группа: "ССП-1-22М", Kypc: 3, Заведение: "BTK", Специальность: "Программист"},
// { Имя:"Евгений", Возраст: 25, Группа: "ССП-1-21М", Kypc: 2, Заведение: "BTK", Специальность: "Сис. Админ."},
// { Имя:"Николай", Возраст: 24, Группа: "МЧС-112", Kypc: 4, Заведение: "BTK", Специальность: "Пожарный"},
// { Имя:"Дмитрий", Возраст: 19, Группа: "ССП-1-20М", Kypc: 1, Заведение: "BTK", Специальность: "Сис. Админ."},
// { Имя:"Олег", Возраст: 47, Группа: "ГПА-19-8", Kypc: 4, Заведение: "BTK", Специальность: "Археолог"},
// ];

// let i = 0;
// console.log("---------------------------------------------")
// for(let avatar of studentsArray) // Массив перебирается в переменную
// {
//     for(let key in avatar)
//     {
//         console.log("|\t\t" + key + ": " + avatar[key]);
//         i++;
//         if (i%6 == 0)
//         {
//             console.log("---------------------------------------------")
//         }
//     }
// }
                                                                                                                ///////////////////////////////////
// function main(message)
// {
// console.log(`Очень приятно, ${message}. Рад знакомству`);
// }

// const message = function calc(a,b)
// {
//     let result = a + b;
//     console.log(result);
// }
// calc(prompt("Введите значение а"),prompt("Введите значение b"));

                                                                                                                ///////////////////////////////////

// function array(person)
// {
//     console.log("Name: \t",person[0])
//     console.log("Age: \t",person[1])
//     console.log("Email: \t",person[2])
// }

// const Tom = ["Tom", 25, "TomBox@ya.ru"];
// const Bob = ["Bob", 29, "BobMail@gmail.ru"]
// array(Tom);
// array(Bob);

                                                                                                                ///////////////////////////////////

// function hello(profile)
// {
//     console.log("Здравствуй, ", profile[0])
//     console.log("Ооо, я знаю это заведение..: ", profile[1])
//     console.log("Надеюсь, из тебя выйдет отличный", profile[2])
// }

// // const Student = [prompt("Привет. Как тебя зовут?"),prompt("А где ты учишься?"),prompt("А где ты учишься?")]
// // hello(Student)

// function students(firstname, lastName, group)
// {
//     alert(`Привет ${firstname} ${lastName}. Я знаю, что ты из группы ${group}.`)
// }
// let studentName = prompt("Введите Имя");
// let studentLastName = prompt("Введите фамилию")
// let studentGroup = prompt("Введите название группы")

// students(studentName,studentLastName,studentGroup)

                                                                                                                ///////////////////////////////////
// function main (a = 1,b = 2,c = 3) 
// {
//     let result = a *(b + c);
//     console.log(`Ваш результат: ${result}`);
// }

// function test(x,y)
// {
//     if (x == undefined) x = 2
//     if (y == undefined) y = 5
//     console.log(x,y)
// }

// test();
                                                                                                                ///////////////////////////////////
 function sum (a,b)
 {
    const result = a + b;
    return result;
 }
const sum2 = sum(1,2);
const sum3 = sum2 + 1;

 //console.log(sum3)

 function Square (a)
 {
    const result = Math.pow(a,2)
    return result;
 }
 //let a = prompt("Введите сторону квадрата")
 //console.log(Square(a))