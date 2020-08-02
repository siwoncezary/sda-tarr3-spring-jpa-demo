function getJson(){
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200){
          console.log("Jest odpowiedź");
          //document.getElementById("json").innerText = this.response;
          const post = JSON.parse(this.response);
          document.getElementById("title").innerText = post.title;
          document.getElementById("body").innerText = post.body;
      }
    };
    request.send();
}

function init(){
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "http://api.nbp.pl/api/exchangerates/tables/A/?format=json");
    ajax.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            const table = JSON.parse(this.response);
            let rates = table[0].rates;
            const sourceCurrency = document.getElementById("source-currency");
            const targetCurrency = document.getElementById("target-currency");
            for(index in rates){
                let item = rates[index];
                sourceCurrency.innerHTML += `<option value=${item.mid} name=${item.code}>${item.currency}</option>`;
                targetCurrency.innerHTML += `<option value=${item.mid} name=${item.code}>${item.currency}</option>`;
            }
            sourceCurrency.innerHTML += `<option value="1.00" name="PLN">złoty polski</option>`;
            targetCurrency.innerHTML += `<option value="1.00" name="PLN">złoty polski</option>`;
            //TODO wstawić datę aktualnych kursów do stopki na stronie z pola effectiveDate
            document.getElementById("table-date").innerText = table[0].effectiveDate;
        }
    }
    ajax.send();
}

function calculate(){
    const midSource = document.getElementById("source-currency").value;
    const midTarget = document.getElementById("target-currency").value;
    const amountSource = document.getElementById("source-amount").value;
    const targetAmount = amountSource * midSource/midTarget;
    const index = document.getElementById("target-currency").selectedIndex;
    let code = document.getElementById("target-currency").options[index].getAttribute("name");

    const target = Intl.NumberFormat("pl-PL", {style: "currency", currency: code}).format(targetAmount);
    document.getElementById("target-amount").value = target;
}