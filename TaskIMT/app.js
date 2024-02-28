const resulted = () =>
{
    let H = parseInt(document.querySelector('#H-abc').value); // Рост
    let W = parseInt(document.querySelector('#W-abc').value); // Вес

    
    const resDiv = document.querySelector('#block-result');

    let H_RIGTH = H/100;
       let result = Math.round((W / (H_RIGTH*H_RIGTH)));
       console.log(`${W}`)
       console.log(`${H}`)
       console.log(`${H_RIGTH}`)
       console.log(`${result}`)
        
            if (result < 16)
            {
                resDiv.innerHTML = 'Выраженный дефицит массы тела';
            } else if(result > 16 && result < 18.5)
            {
                resDiv.innerHTML = 'Недостаточная масса тела'; 
            } else if (result > 18.5 && result < 25)
            {
                resDiv.innerHTML = 'Норма';
            } else if(result > 25 && result < 30)
            {
                resDiv.innerHTML = 'Избыточная масса тела';
            } else if(result > 30 && result < 35)
            {
                resDiv.innerHTML = 'Ожирение I';
            } else if(result > 35 && result < 40)
            {
                resDiv.innerHTML = 'Ожирение II';
            } else if(result > 40)
            {
                resDiv.innerHTML = 'Ожирение III';
            }        
}