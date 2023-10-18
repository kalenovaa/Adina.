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







const tabContendBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')



const hideTabContend = () => {
    tabContendBlocks.forEach(tabContendBlock=> {
        tabContendBlock.style.display = 'none'
    })
    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')

    })
}
const showTabContends = (indexElement = 0) => {
    tabContendBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}
hideTabContend()
showTabContends()

tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsBlocks.forEach((tabBlock, tabIndex)=> {
            if (event.target === tabBlock){
                hideTabContend()
                showTabContends(tabIndex)
            }
        })
    }
}
let sliderIndex = 0
const autoSlider = () => {
    hideTabContend()
    sliderIndex = (sliderIndex + 1) % tabContendBlocks.length
    showTabContends(sliderIndex)
}
setInterval(autoSlider, 3000)

// //MODAL
