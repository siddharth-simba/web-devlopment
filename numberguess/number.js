let min = 1,
max = 10,
winningnum = 2,
guessesleft = 3;

const game = document.getElementById("game"),
minnum = document.querySelector(".min-num"),
maxnum = document.querySelector(".max-num"),
guessbtn = document.querySelector("#guess-btn"),
guessinput = document.querySelector("#guess-input"),
message =  document.querySelector(".message");

minnum.textContent = min;
maxnum.textContent = max;

guessbtn.addEventListener("click", function(){

    let guess = parseInt(guessinput.value);
    if(isNaN(guess) || guess > max || guess < min){
        setMessage("please enter number between the range" , "red")
    }

    if(guess==winningnum){
        guessinput.disabled = true;
        guessinput.style.borderColor = "green";
        setMessage("Congratulation !!!" , "green")
    }else{
        guessesleft -= 1;
        if(guessesleft ===0){
            guessinput.disabled = true;
        guessinput.style.borderColor = "red";
        setMessage(`OOps you lost!!! correct answer is ${winningnum}` , "red")            


        }else{
            guessinput.value = " "
            guessinput.style.borderColor = "red";
            setMessage(`you lost one chance!!! guess left ${guessesleft}` , "red")   
        }

    }
})



function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}