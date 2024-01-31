

function getRND (min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min + 1) + min)
}
// Получить рандомные числа min и max включительно


// 6. Напишите программу, которая принимает массив целых чисел и проверяет, есть ли в нем хотя бы одно число, которое делится на 3 без остатка. 
//    Если да, то программа должна вывести "Да", если нет - "Нет".

let mass = [];
let searchmass = [];
y = 0;
for (x = 0; x < 25; x++)
{
    mass[x] = getRND(-100,100); 
    
    if (mass[x]%3 == 0)
    {        
        //console.log("|\t" + mass[x] + "\t\t minus")
        searchmass[y] = mass[x];
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
    console.log("Массив найденных чисел, делящихся на 3 без остатка:")
    console.log("==============")
for (z = 0; z < searchmass.length; z++)
{
    console.log("|\t" + searchmass[z] + "\t\t|")
}
    console.log("==============")

console.log("Начальный массив:")
console.log(mass)