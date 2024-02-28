let firstName;
let lastName;
let nextBtn;

let reqInput = () => 
{
    firstName = document.querySelector("#input-firstname").value;
    lastName = document.querySelector("#input-lastname").value;
    // button next
    nextBtn = document.querySelector("#next-btn");
    
    if (firstName.length != 0 && lastName != 0)
    {
        nextBtn.disabled = false;
    }
    return [firstName, lastName];
}

// func for Click on button

let nextForm = () =>
{
    inputChecks = document.querySelectorAll('.wrapper-form-check');

    if ( inputChecks[0].checked === true && inputChecks[1].checked === false)
    {
        let contentPositive = document.querySelector('.wrapper-content-positive');
        contentPositive.style.display = 'block';
        return inputChecks;
    } else if (inputChecks[1].checked === true && inputChecks[0].checked === false)
    {
        let contentNegative = document.querySelector('.wrapper-content-negative');
        contentNegative.style.display='block';
        return inputChecks;
    } else 
        {
            alert('Укажите только одно значение')
        }
}

// Func for save 'AHKETA'

let saveForm = () => 
{
    let check = nextForm();

    let peopleNames = reqInput();
    if (check[0].checked)
    {
        let contentNegative = document.querySelector('.wrapper-content-positive');

        let inputKaf = contentNegative.querySelector('#input-kaf').value;
        let inputSchool = contentNegative.querySelector('#input-school').value;

        let select = contentNegative.querySelector('#select-nap');

        let selectOptions = select.options[select.selectedIndex].text;
        alert(`Участник ${peopleNames[0]} ${peopleNames[1]}, прошел обучение в школе "${inputSchool}" и на данный момент является студентом кафедры "${inputKaf}" явился на чемпионат по направлению "${selectOptions}"`);

    } else if (check[1].checked)
    {
        let contentNegative = document.querySelector('.wrapper-content-negative');

        let inputChild = contentNegative.querySelector('#input-name').value;
        let inputSchool = contentNegative.querySelector('#input-school').value;

        let select = contentNegative.querySelector('#select-nap');

        let selectOptions = select.options[select.selectedIndex].text;
        alert(`Участник ${peopleNames[0]} ${peopleNames[1]} с наставником "${inputChild}", прошел обучение в школе "${inputSchool}" и явился на чемпионат по направлению "${selectOptions}"`);
    }
}