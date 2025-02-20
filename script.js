//alert("Привет, я JS!");

function guess()
{
    var number = prompt("Введи число: ");
    var guessNumber = 10;

    if (guessNumber == number) {
        alert("Вы угадали :D.");

    }
    else if (number > guessNumber){
        alert("Это много. ");
        return guess();
    }

    else if (number < guessNumber){
        alert("Это мало. ");
        return guess();
    }  
}

//guess();

function reminder() {
    alert("ВЫ ЗАБАНЕНЫ!!!! УХОДИТЕ!!! ВАМ ЗДЕСЬ НЕ РАДЫ!!!");
    setTimeout(window.close, 1000);
}

//setTimeout(reminder, 5000);

function validForm(){
    var name = document.getElementById("name").value;
    
    var reg_name = /^[a-zа-яё]+$/i;
    
    if (reg_name.test(name) == false){
        alert("Неверные данные");
    }

}

document.querySelector(".button").addEventListener("click", validForm);