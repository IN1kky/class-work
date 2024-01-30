let students = 
[
    {name:"Дмитрий",age: 20, group: "ССП-1-22М"},
    {name:"Иван",age: 22, group: "ССП-1-22М"},
    {name:"Евгений",age: 25, group: "ССП-1-22А"},
    {name:"Родион",age: 19, group: "ССП-1-21М"},
    {name:"Елена",age: 20, group: "ССП-1-22А"},
    {name:"Денис",age: 23, group: "ССП-1-21М"},
    {name:"Кирилл",age: 21, group: "ССП-1-21М"},
]

function filterStudents(studentsArray, targetGroup)
{
    return studentsArray.filter(person => person.group == targetGroup);
}
let studentsWithGroup = filterStudents (students,'ССП-1-21М');
console.log(studentsWithGroup)
