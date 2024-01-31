

function getRND (min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min + 1) + min)
}
// Получить рандомные числа min и max включительно


// 5. Напишите программу, которая принимает массив целых чисел и проверяет, есть ли в нем хотя бы одно отрицательное число. 
//    Если да, то программа должна вывести "Да", если нет - "Нет";

let mass = [];
y = 0;
for (x = 0; x < 25; x++)
{
    mass[x] = getRND(-100,100); // Для проверки - заменяем на (0,100)
    
    if (mass[x] < 0)
    {        
        //console.log("|\t" + mass[x] + "\t\t minus")
        y++;
    } else
    {
        //console.log("|\t" + mass[x] + "\t\t plus")
    }
}
    if (y > 0)
    {
        console.log("Да")
    }
    else
    {
        console.log("Нет")
    }
    
console.log(mass)