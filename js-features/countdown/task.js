const CountDownTimer  = function(){
    const countdown = document.getElementById("timer");  

    if (countdown.textContent >= 1){
        countdown.textContent -= 1;                     
    }	else if(countdown.textContent = '0'){
        clearTimeout(timer);
        alert("Вы победили в конкурсе!");
    }
}

setInterval(CountDownTimer,1000);
