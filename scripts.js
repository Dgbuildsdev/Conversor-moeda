const convertButton = document.getElementById('convert-button');
const currencySelect = document.getElementById('currency-select');

function convertValues() {
    const inputCurrencyValue = document.getElementById('input-currency').value;
    const real = document.getElementById('real');
    const dolar = document.getElementById('dolar');

    const dolarToday = 5.2;
    const euroToday = 7.2;
    const libraToday = 10.2;
    const bitcoinToday = 100000.2;


    if (currencySelect.value == 'USD') {
        dolar.innerHTML = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == 'EUR') {
        dolar.innerHTML = new Intl.NumberFormat("de-DE", { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / euroToday);
    }
    if (currencySelect.value == 'GBP') {
        dolar.innerHTML = new Intl.NumberFormat("en-GB", { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / libraToday);
    }
    if (currencySelect.value == 'BTC') {
        dolar.innerHTML = new Intl.NumberFormat("en-GB", { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / bitcoinToday);
    }

    real.innerHTML = new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue);



}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.getElementById('currency-Img'); 

    if (currencySelect.value == 'USD') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImg.src = './assets/dolar.png';
    }
    if (currencySelect.value == 'EUR') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = './assets/euro.png';
    }
    if (currencySelect.value == 'GBP') {
        currencyName.innerHTML = 'Libra Esterlina';
        currencyImg.src = './assets/libra.png';
    }
    if (currencySelect.value == 'BTC') {
        currencyName.innerHTML = 'Bitcoin';
        currencyImg.src = './assets/bitcoin.png';
    }
    convertValues();
}

currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);