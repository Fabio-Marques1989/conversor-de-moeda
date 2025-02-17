const buttonConvert = document.querySelector(".button-convert")
const valueConvert = document.querySelector(".value-convert")
const valueConvertedCurrency = document.querySelector(".value-converted")
const selectCurrency = document.querySelector(".select-currency")

//Valores Moeda
const dolarToday = 5.71
const euroToday = 5.99


function currencyConvert(){
    const convertValue = document.querySelector(".input-currency").value;

    if (selectCurrency.value == "dolar") {
        valueConvertedCurrency.innerHTML = new Intl.NumberFormat("en-US", 
            {style: "currency", currency: "USD"}).format(convertValue / dolarToday)

    }
    
    if ( selectCurrency.value == "euro") { 
        valueConvertedCurrency.innerHTML = new Intl.NumberFormat("de-DE",
            {style: "currency", currency: "EUR"}).format(convertValue / euroToday)

    }
   
    valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", 
        {style: "currency", currency: "BRL"}).format(convertValue)
    
}

function changeCurrency(){
    const currencyName = document.getElementById("currency")
    const currencyImage = document.querySelector(".currency-image")
    // console.log("trocou nome")

    if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/img/dolar.png"
    }

    if (selectCurrency.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img/Euro.png"
    }

    currencyConvert()
}



selectCurrency.addEventListener("change", changeCurrency)
buttonConvert.addEventListener("click", currencyConvert)