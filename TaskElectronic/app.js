const Calc = () =>
{
    const laptops = parseInt(document.querySelector("#input-laptop").value);
    const laptopsPrice = parseInt(document.querySelector("#input-laptop2").value);

    const phones = parseInt(document.querySelector("#input-phone").value);
    const phonesPrice = parseInt(document.querySelector("#input-phone2").value);

    const bphones = parseInt(document.querySelector("#input-bphone").value);
    const bphonesPrice = parseInt(document.querySelector("#input-bphone2").value);

    const TV = parseInt(document.querySelector("#input-TV").value);
    const TVPrice = parseInt(document.querySelector("#input-TV2").value);

    if(isNaN(laptops) || isNaN(phones) || isNaN(bphones) || isNaN(TV) || isNaN(laptopsPrice) || isNaN(phonesPrice) || isNaN(bphonesPrice) || isNaN(TVPrice))
    {
        alert("Не оставляйте поля пустыми. Вводите 0, если данный товар не был куплен");
    }
    else
    {
        const techno = 
        {
            'laptop': laptops * laptopsPrice,
            'phone': phones * phonesPrice,
            'bphone': bphones * bphonesPrice,
            'TV': TV * TVPrice,            
        }
        const all = techno["laptop"] + techno["phone"] + techno["bphone"] + techno["TV"];

        const resdiv = document.querySelector("#result");
        resdiv.innerHTML = 
        `
        <p>Стоимость ноутбуков: ${techno["laptop"]} руб.</p>
        <p>Стоимость телефонов: ${techno["phone"]} руб.</p>
        <p>Стоимость планшетов: ${techno["bphone"]} руб.</p>
        <p style="margin-right: 10px;">Стоимость smart-TV: ${techno["TV"]} руб.</p>
        <p>Общая стоимость: ${all} руб.</p>
        `;
    }
}