function getBitcoinPrice() {
    //create a custom data type we can now use and interact with
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            //take in json give out javascript object
            let bitCoinData = JSON.parse(this.responseText);
            let usdVal = bitCoinData.bpi.USD.rate;
            //get element to put into html
            document.getElementById("bitcoin-price").innerHTML = usdVal + " USD";
        } else if (this.readyState !=4) {
            document.getElementById("bitcoin-price").innerHTML="LOADING";
        } else {
            document.getElementById("bitcoin-price").innerHTML="Something went wrong";
        }
    }
    //make true to run asyncornous code
    ajax.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
    ajax.send();
}

let bitcoinButton = document.getElementById("bitcoin-button");
bitcoinButton.addEventListener("click", getBitcoinPrice)