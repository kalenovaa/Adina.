const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element,target,target2,isCurrency)=> {
    element.oninput = ()=> {
        const request = new XMLHttpRequest()
        request.open("GET","../data/convertor.json")
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