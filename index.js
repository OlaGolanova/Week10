'use strict';

// Задания из видео с Алисой

// Калькулятор 


  function sum() {
    let x = prompt('Введите первое число');
    let y = prompt('Введите второе число');
     alert (+x + +y);
 }
 
  function subtraction() {
    let x = prompt('Введите первое число');
     let y = prompt('Введите второе число');
   alert (x - y);
 }
 function division() {
    let x = prompt('Введите первое число');
    let y = prompt('Введите второе число');
     alert (x / y);
 }

 function multiplication() {
     let x = prompt('Введите первое число');
     let y = prompt('Введите второе число');
    alert (x * y);
 }


// 
 let x = prompt('Как тебя зовут?');
 alert('Привет, ' + x + '!');




// Практическое задание

function showMassage() {
    console.log('Я учу JavaScript!');
}
showMassage();  //Я учу JavaScript!



// Слайдер
    let prev = document.getElementById('previous');
    let next = document.getElementById('next');
    let image = document.getElementById('slider-img');

function showImagePrev() { 
    previous.style.backgroundColor = 'pink';
    previous.style.color = 'black';
    next.style.backgroundColor = 'black';
    next.style.color = 'antiquewhite';
    image.src = 'slider/apple.jpg';
}


function showImageNext() {
    next.style.backgroundColor = 'pink';
    next.style.color = 'black';
    previous.style.backgroundColor = 'black';
    previous.style.color = 'antiquewhite';
    image.src = 'slider/pear.jpg';
}


// Задача со *

const button = document.querySelector('.form-btn');
const input = document.querySelector('input');

button.onclick = function() {
    let num = +input.value;
    if (num % 4 == 0) {
        if (num % 100 == 0) {
            if (num % 400 == 0) {
         
                alert('Год является высокосным (366 дней)');
            } else {
                alert('Год не высокосный (у него 365 дней)');
            }
        } else {
            alert('Год является высокосным (366 дней)');
        }

    } else {
        alert('Год не высокосный (у него 365 дней)');
    }
}




