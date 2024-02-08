class Person
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    print()
    {
        console.log(`Имя ${this.name}, возраст ${this.age}`);
    }
}

class Work extends Person
{
    company;
    constructor(name,age,company)
    {
        super(name,age);      
        this.company = company;
    }
    printed()
    {
        console.log(`${this.name}, ${this.age} лет, работает в ${this.company}`)
    }
}
let Harry = new Work("Harry", 28, "Kefir");

Harry.print();
Harry.printed();