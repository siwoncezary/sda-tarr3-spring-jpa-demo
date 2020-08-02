let currenciesName;
let mids;
let codes;
let currencies;

class AjaxClass{
    constructor(url){
        this.url = url;
    }

    read(callback) {
        let request = new XMLHttpRequest();
        request.open("GET", this.url, true);
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.response);
            }
        }
        request.send();
    }
}

function init(){
    let npbApi = new AjaxClass("http://api.nbp.pl/api/exchangerates/tables/A/?format=json");
    //let npbApi = new AjaxClass("https://pekao-one.glitch.me/todos");
    npbApi.read(response => {
       currencies = JSON.parse(response)[0];
       currenciesName = currencies.rates.map(item => item.currency);
       mids = currencies.rates.map(item => item.mid);
       codes = currencies.rates.map(item => item.code);
       mids.push(1.00);
       currenciesName.push("złoty polski");
       codes.push("PLN");
       let sourceCurrency = document.getElementById("source-currency");
       let targetCurrency = document.getElementById("target-currency");
       sourceCurrency.innerHTML = currenciesName.reduce((total, code, index) => {
           return total + `<option value="${index}">${code}</option>`;
       });
       targetCurrency.innerHTML = currenciesName.reduce((total, code, index) => {
           return total + `<option value="${index}">${code}</option>`;
       });
       document.getElementById("info").innerText = "Stan na dzień: " + currencies.effectiveDate;
    });
}

function calculate(){
    let sourceIndex = document.getElementById("source-currency");
    let targetIndex = document.getElementById("target-currency");
    let source = mids[sourceIndex.value];
    let target = mids[targetIndex.value];
    let code = codes[targetIndex.value];
    let amount = document.getElementById("source-amount").value;
    let targetAmount = document.getElementById("target-amount");
    targetAmount.value = new Intl.NumberFormat('pl-PL', {style: "currency", currency: code}).format( amount * source/target);
}

function getJson(){
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(json => console.log(json.title));
}