// setTimeout(() => {
//     console.log(1)
// }, 2100)
//
// console.log(4)
// setTimeout(() => {
//     console.log(2)
// }, 1000)
//
// setTimeout(() => {
//     console.log(3)
// }, 500)
//
// setTimeout(() => {
//     console.log(5)
// }, 50)
// let num = 0
//  const interval = setInterval(() => {
//    num++
//     console.log(num)
// },1000)

//EVENT LOOP


// const doHomeWork = (finish,subject) => {
//     alert(`starting my ${subject} home work!`)
//     finish()
// }
//
// const alertFinish = () => {
//     return alert('FINISH!')
// }
// doHomeWork('subject,subject')




// const calc = (a, d ) => console.log(a)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// const newArr  = arr.map((indexElement, ) => {
//     console.log(`Element: ${element}, index: ${indexElement}`)
//     return element + indexElement
// })
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// arr.forEach((element, indexElement )=>{
//     return console.log(element + indexElement)
// })

// lesson 4
// JSON
//
// const obj = {
//     name: "Nurdin",
//     age: 19
// }
// XMLHttRequest
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element,target,target2,isCurrency)=> {
    element.oninput = ()=> {
        const request = new XMLHttpRequest()
        request.open("GET","../data/convector.json")
        request.setRequestHeader("Contend-type","application/json")
        request.send()


        request.onload = ()=> {
            const response = JSON.parse(request.response)
            if (isCurrency === 'som'){
                target.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.eur).toFixed(2)
            }
            else if (isCurrency === 'usd'){
                target.value = (element.value * response.usd).toFixed(2)
                target2.value = (element.value * response.eur / response.usd).toFixed(2)
            }
            else if (isCurrency === 'eur'){
                target.value = (element.value * response.eur).toFixed(2)
                target2.value = (element.value * (response.usd / response.eur)).toFixed(2)
            }
            if (element.value === ''|| target.value === '0') {
                target.value = '';
                target2.value = '';
            }
        }
    }
}
converter(som,usd,eur,'som')
converter(usd,som,eur,'usd')
converter(eur,som,usd,'eur')












