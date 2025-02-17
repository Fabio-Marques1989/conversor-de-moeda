const buttonConvert = document.querySelector(".button-convert");
const inputCurrency = document.querySelector(".input-currency");
const selectCurrency = document.querySelectorAll("select")[1]; // Segundo select (moeda de destino)

const exchangeRates = {
    "US$ Dólar americano": { rate: 5.0, symbol: "USD", img: "./assets/img/dolar.png", name: "Dólar Americano" },
    "€ Euro": { rate: 5.5, symbol: "EUR", img: "./assets/img/euro.png", name: "Euro" }
};

// Função para formatar número como moeda brasileira no input
function formatInput(value) {
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    let floatValue = Number(value) / 100; // Ajusta para casas decimais
    return floatValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Aplica a formatação ao input enquanto digita
inputCurrency.addEventListener("input", function () {
    this.value = formatInput(this.value);
});

function formatCurrency(value, currency) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: currency });
}

function currencyConvert() {
    let convertValue = inputCurrency.value.replace(/\D/g, "") / 100; // Remove caracteres não numéricos e ajusta para decimal

    if (isNaN(convertValue) || convertValue <= 0) return; // Evita cálculos com valores inválidos

    const selectedCurrency = selectCurrency.value;
    const conversionData = exchangeRates[selectedCurrency];
    const valueConverted = convertValue / conversionData.rate;

    document.querySelector(".value-convert").textContent = formatCurrency(convertValue, "BRL");
    document.querySelector(".value-converted").textContent = formatCurrency(valueConverted, conversionData.symbol);

    // Atualiza imagem e nome da moeda convertida
    document.querySelector(".converted-currency img").src = conversionData.img;
    document.querySelector(".converted-currency p:first-of-type").textContent = conversionData.name;

    inputCurrency.value = ""; // Limpa o campo
}

buttonConvert.addEventListener("click", currencyConvert);
