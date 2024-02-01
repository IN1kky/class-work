let minMax = (a,b) => 
{
    if (a > b) console.log(`${a} > ${b}`);
    else if (b > a) console.log(`${a} < ${b}`);
    else if (a == b) console.log(`${a} = ${b}`);
    else if (a == undefined || b == undefined) console.log("Введите значения")
    else console.log('Значения введены некорректно')

}
minMax(175,"asdfa");