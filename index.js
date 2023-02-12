
 function inputNumberOne() {
     let x = prompt('Введите первое число');
     return x;
 }

 function inputNumberTwo() {
     let y = prompt('Введите второе число');
     return y;
  }

 let a = Number(inputNumberOne());


 let b = Number(inputNumberTwo());

 function sum(a,b) {
   return (a + b);
 } 
 alert (sum(a,b));

 function subtraction(a,b) {
    return (a - b);
  }
  alert (subtraction(a,b));

 function division(a,b) {
     return (a / b);
  }
  alert (division(a,b));

 function multiplication(a,b) {
      return (a * b);
   }
  alert (multiplication(a,b));