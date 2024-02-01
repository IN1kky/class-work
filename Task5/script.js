

function getRND (min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min + 1) + min)
}
// Получить рандомные числа min и max включительно


// 4. Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает сумму всех его элементов.

let mass = [];
let searchmass = [];
y = 0;
for (x = 0; x < 25; x++)
{
    mass[x] = getRND(-100,100);    
}
console.log("Исходный массив\n" + mass +"\n\n Процесс суммирования:")
function plusmass (massive)
{
    let result = 0;
    for (y = 0; y < massive.length; y++)
    {
        result += massive[y]   
        console.log("|\t" + result)     
    }
    return result;
}
console.log("Итог суммирования: " + plusmass(mass));
    