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

// Практическое задание

function showMassage() {
    console.log('Я учу JavaScript!');
}
showMassage();  //Я учу JavaScript!

//


function showImagePrev() {
    let prev = document.getElementById('previous');
    let next = document.getElementById('next');
    let image = document.getElementById('slider-img');
    previous.style.backgroundColor = 'pink';
    previous.style.color = 'black';
    next.style.backgroundColor = 'black';
    next.style.color = 'antiquewhite';
    image.src = 'slider/pineapple.jpg';
}


function showImageNext() {
    let prev = document.getElementById('previous');
    let next = document.getElementById('next');
    let image = document.getElementById('slider-img');
    next.style.backgroundColor = 'pink';
    next.style.color = 'black';
    previous.style.backgroundColor = 'black';
    previous.style.color = 'antiquewhite';
    image.src = 'slider/pear.jpg';
}
