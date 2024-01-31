// 3. Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их максимальное значение;

function maxi(a,b)
{
    if (a > b)
    {
        return a;
    }
    else if (a < b)
    {
        return b;
    } 
    else
    {
        console.log("Числа равны")
    }   
}
let x = prompt("Введите первое число");
let y = prompt("Введите второе число");
console.log(maxi(x,y))
