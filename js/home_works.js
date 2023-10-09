//DZ1_1
let gmailInput = document.querySelector("#gmail_input")
let gmailButton = document.querySelector("#gmail_button")
let gmailResult = document.querySelector("#gmail_result")

const redEx = /^[a-zA-Z0-9_-]+([a-zA-Z0-9]@gmail.com)$/

gmailButton.onclick = () => {
    if(redEx.test(gmailInput.value)){
        gmailResult.innerHTML = "yes"
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = " no"
        gmailResult.style.color = 'red'
    }
}
//DZ1_02
let counter = 0
function moveBlock (){
    const  child = document.querySelector('.child_block')
    child.style.left = `${counter}px`
    counter++
    if (counter <= 450){
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()