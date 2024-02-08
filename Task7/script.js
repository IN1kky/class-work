// ----------------------------------------------------------------------------------------------------
// Задание 1 - Начало

// class Factorial
// {
//     num;
    
//     constructor (factNum)
//     {
//         this.num = factNum;
//     }
//     puprose()
//     {
//         let result = 1;
        
//         this.num = this.num + 1;
//         for(let i = 2; i < this.num; i++)
//         {
//           result *= i            
//         }
//         return result;
//     }   
//     print()
//     {
//         let printed = this.puprose();
//         console.log(printed)
//     }
// }

    // let x = parseInt(prompt("Введите число"));
    // const res = new Factorial(x);
    // res.print();

// Задание 1 - Конец
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// Задание 2 - Начало

// class quadroABC
// {
//     kof_A;
//     kof_B;
//     kof_C;
//     constructor(qA,qB,qC)
//     {
//         this.kof_A = qA;
//         this.kof_B = qB;
//         this.kof_C = qC;
//     }
//     searchX()
//     {
//         let D = parseInt(Math.pow(this.kof_B,2) - (4 * this.kof_A * this.kof_C));
       
//         if (D > 0)
//         {
//             let x1 = parseInt(-this.kof_B + Math.sqrt(D)) / (2 * this.kof_A);
//             let x2 = parseInt(-this.kof_B - Math.sqrt(D)) / (2 * this.kof_A);

//             return [x1,x2];
//         } else
//         if (D == 0) 
//         {
//             let x = parseInt(-this.kof_B + Math.sqrt(D)) / (2 * this.kof_A);
//             return x;
//         } else
//         if (D < 0)
//         {
//             return "Корней нет";
//         }       
//     }
//     print()
//     {
//         let res = this.searchX();
//         console.log(res);
//     }
// }

// const A = parseInt(prompt("Введите коэфф. a"));
// const B = parseInt(prompt("Введите коэфф. b"));
// const C = parseInt(prompt("Введите коэфф. c"));

// const purp = new quadroABC(A,B,C);
// purp.print();

// Задание 2 - Конец
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// Задание 3 - Начало

// class Progress
// {
//     constructor(start,diff,kolvo)
//     {
//        this.start = start;
//        this.diff = diff;
//        this.kolvo = kolvo; 
//     }

//     summ()
//     {
//         let end = this.start + (this.kolvo - 1) * this.diff;
//         let sum =((this.start + end) *this.kolvo) / 2;
//         return sum;
//     }
// }
// const summa = new Progress(1,2,5);
// const itog = summa.summ();
// console.log(itog)

// Задание 3 - Конец
// ----------------------------------------------------------------------------------------------------