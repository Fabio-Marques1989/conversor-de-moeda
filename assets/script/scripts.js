const buttonConvert = document.querySelector(".button-convert")
const valueConvert = document.querySelector(".value-convert")
const valueConvertedCurrency = document.querySelector(".value-converted")
const selectCurrency = document.querySelector(".select-currency")
const currencySelect = document.querySelector(".currency-select")

//Valores Moeda



async function currencyConvert(){
    const convertValue = document.querySelector(".input-currency").value;

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high

    if (selectCurrency.value == "dolar") {
        valueConvertedCurrency.innerHTML = new Intl.NumberFormat("en-US", 
            {style: "currency", currency: "USD"}).format(convertValue / dolarToday)

    }
    
    if ( selectCurrency.value == "euro") { 
        valueConvertedCurrency.innerHTML = new Intl.NumberFormat("de-DE",
            {style: "currency", currency: "EUR"}).format(convertValue / euroToday)

    }

    if ( selectCurrency.value == "libra") { 
        valueConvertedCurrency.innerHTML = new Intl.NumberFormat("en-GB",
            {style: "currency", currency: "GBP"}).format(convertValue / libraToday)

    }

    if ( selectCurrency.value == "bitcoin") { 
        valueConvertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(convertValue / bitcoinToday) + " BTC";
        
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

    if (selectCurrency.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/img/libra.png"
    }

    if (selectCurrency.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/img/bitcoin.png"
    }

    currencyConvert()
}



selectCurrency.addEventListener("change", changeCurrency)
buttonConvert.addEventListener("click", currencyConvert)