function calculate() {
    var calcButton = document.getElementById("calculate");

    calcButton.addEventListener("click", function() {
        var mealAmount = parseInt(document.getElementById("mealAmount").value);
        var tipPercentage = document.getElementById("service").value / 100;
        var totalPeople = parseInt(document.getElementById("numofPeople").value);
        var displayTotal = document.getElementById("total");
        var displayTipAmount = document.getElementById("tipAmount");
        var displayTotalDivided = document.getElementById("totalDivided");
        var displayError = document.getElementById("error");

        var tipAmount = mealAmount * tipPercentage;
        var totalBill = mealAmount + tipAmount;
        var totalDivided = totalBill / totalPeople;
        
        displayTotal.innerText= "Total bill: $" + totalBill.toFixed(2);
        displayTipAmount.innerText = "Tip amount: $" + tipAmount.toFixed(2);

        if (!totalPeople === "" || totalPeople> 1) {
            displayTotalDivided.innerText="Each person pays" + " $" + totalDivided.toFixed(2);
        }

        errorMessage= "You can not leave the fields empty";
        displayError.style.color= "red";
        displayError.style.textAlign= "center";
        displayError.style.fontSize= "130%";
        if (document.getElementById("mealAmount").value==="",  document.getElementById("service").value==="", document.getElementById("numofPeople").value==="") {
            displayTotal.innerText= "";
            displayTipAmount.innerText= "";
            displayTotalDivided.innerText= "";
            displayError.innerText= errorMessage;

        } else {
            displayError.innerText= "";
        }
        
    })

    
}

function erase() {
    document.getElementById("erase").addEventListener("click", function() {
        document.getElementById("mealAmount").value="";
        document.getElementById("service").value="";
        document.getElementById("numofPeople").value="";
        document.getElementById("total").innerText="";
        document.getElementById("tipAmount").innerText="";
        document.getElementById("totalDivided").innerText="";

        
    })
}
