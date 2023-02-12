
 function inputNumberOne() {
     let inputNumber3 = prompt('Введите первое число');
     return inputNumber3;
 }

 function inputNumberTwo() {
     let inputNumber4 = prompt('Введите второе число');
     return inputNumber4;
  }

 let inputNumber1 = Number(inputNumberOne());


 let inputNumber2 = Number(inputNumberTwo());

 function sum(a,b) {
   return (a + b);
 } 
 alert (sum(inputNumber1,inputNumber2));

 function subtraction(a,b) {
    return (a - b);
  }
  alert (subtraction(inputNumber1,inputNumber2));

 function division(a,b) {
     return (a / b);
  }
  alert (division(inputNumber1,inputNumber2));

 function multiplication(a,b) {
      return (a * b);
   }
  alert (multiplication(inputNumber1,inputNumber2));