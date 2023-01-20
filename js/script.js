let input1 = document.querySelector("#one")
let title2 = document.querySelector(".title2")
let input2 = document.querySelector('#two')
let btn1 = document.querySelector(".start")
let btn2 = document.querySelector(".chance")
let err1 = document.querySelector(".err1")
let count = document.querySelector(".count")
let counter = document.querySelector(".counter")
let container = document.querySelector(".container")

container.style.width = "400px"
container.style.height = "300px"
container.style.margin = " 60px auto"
container.style.textAlign = "center"
container.style.border = "1px solid black"

input1.style.width="300px";
input1.style.height = "30px"
input1.style.paddingLeft = "10px"
btn1.style.padding = "8px";
input1.type = "password"

input2.style.width="300px";
input2.style.height = "30px"
input2.style.paddingLeft = "10px"
btn2.style.padding = "8px";

input2.style.display = "none"
btn2.style.display = "none"
count.style.display = "none"

btn1.addEventListener("click",function(){
    if(!(99999999-input1.value)){
        err1.innerHTML= "Enter a Valid Number between 1 to 9";
        err1.style.color="red"
    }else if((99999999-input1.value) && (input1.value>=1) && (input1.value <=9)){
        err1.innerHTML = ""
        input1.style.display = "none"
        title2.innerHTML = "Please Enter a Guessing Value between 1 to 9"
        btn1.style.display = "none"
        input2.style.display = "inline-block"
        btn2.style.display = "inline-block"
        count.style.display = "block"
        let chance = 4;
        counter.innerHTML= chance+1
        btn2.addEventListener("click",function(){
            if(input2.value == input1.value){
                title2.innerHTML = "Player 2 Winner!"
                input2.style.display = "none"
                btn2.style.display = "none"
                count.style.display = "none"
                title2.style.fontSize = "24px"
                err1.style.display="none"
            }
            else if((input2.value != input1.value) && (chance >= 0) && (chance<=5) && (input2.value>=1) && (input2.value <=9)){
                
                counter.innerHTML= chance
                count.style.display = "block"
                err1.innerHTML= " "
                
                if(chance == 0){
                    title2.style.fontSize = "24px"
                    title2.innerHTML = "Player 1 Winner!"
                    input2.style.display = "none"
                    btn2.style.display = "none"
                    count.style.display = "none"
                    err1.innerHTML= "Player 1 Value : " + input1.value;
                    err1.style.color = "blue"
                }
                chance--
                
            }else{
                err1.innerHTML= "Please enter value between 1 to 9!";
                err1.style.color="red"
            }
            
        })
    }else{
        err1.innerHTML = "Sorry! Enter a valid number between 1 to 9";
        err1.style.color="red"
    }
    
})