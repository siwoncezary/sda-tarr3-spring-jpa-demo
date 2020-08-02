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
            const targetCurrency = document.getElementById("target-currency")
            for(index in rates){
                let item = rates[index];
                sourceCurrency.innerHTML += `<option value=${index}>${item.currency}</option>`;
                targetCurrency.innerHTML += `<option value=${index}>${item.currency}</option>`;
            }
        }
    }
    ajax.send();
}