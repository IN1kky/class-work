

function getRND (min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min + 1) + min)
}
// Получить рандомные числа min и max включительно


// 1. Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только числа, кратные 3, 5 и 7.

let mass = [];
let searchmass = [];
y = 0;
for (x = 0; x < 25; x++)
{
    mass[x] = getRND(-100,100);    
}
console.log("Исходный массив:\n" + mass );
function mass357 (massive)
{
    let result = [];
    let z = 0;
    for (y = 0; y < massive.length; y++)
    {
        if (mass[y]%3 == 0 || mass[y]%5 == 0 || mass[y]%7 == 0 )
        {
            result[z] = massive[y];            
            z++
            
        }    
    }
    return result;
}
console.log("Новый массив:\n" + mass357(mass));
    