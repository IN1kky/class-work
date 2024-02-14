// Работа с DOM - элементами

let inputOne = document.querySelector("#input-1"); // # = Search ID
let inputDay = document.querySelector("#input-2");
let inputName = document.querySelector("#input-3");
let inputSurname = document.querySelector("#input-4");
let inputWorker = document.querySelector("#input-5");
let btn = document.querySelector("#btn");
let resulText = document.querySelector(".result-text") // . = Search Class

// Фамилия имя и должность

// Отслеживаем событие клик
btn.addEventListener('click',() => 
{
    if (inputOne.value.length == 0 || inputDay.value.length == 0 || inputName.value.length == 0 || inputSurname.value.length == 0 || inputWorker.value.length == 0 )
    {
        alert("Заполните все поля!");
    } else 
    {
        if (inputDay.value > 31)
        {
            alert("Укажите корректное значение дней")
        } else
        {
            let result = inputOne.value * inputDay.value;
            let day = "";
            if (inputDay.value == 1)
            {
                day = "день";
            } else if (inputDay.value > 1 && inputDay.value < 5)
            {
                day = "дня";
            } else 
            {
                day = "дней";
            }
            resulText.innerText = `${inputSurname.value} ${inputName.value}, вы работаете ${inputWorker.value}ом и за ${inputDay.value} ${day}, вы заработаете ${result} рублей`;
        }
    }
});