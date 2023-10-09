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