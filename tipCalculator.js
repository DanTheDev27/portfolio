function calculate() {
    var calcButton = document.getElementById("calculate");

    calcButton.addEventListener("click", function() {
        var mealAmount = parseInt(document.getElementById("mealAmount").value);
        var tipPercentage = document.getElementById("service").value / 100;
        var totalPeople = parseInt(document.getElementById("numofPeople").value);
        var displayTotal = document.getElementById("total");
        var displayTipAmount = document.getElementById("tipAmount");
        var displayTotalDivided = document.getElementById("totalDivided");

        var tipAmount = mealAmount * tipPercentage;
        var totalBill = mealAmount + tipAmount;
        var totalDivided = totalBill / totalPeople;
        
        displayTotal.innerText= "Total bill: $" + totalBill.toFixed(2);
        displayTipAmount.innerText = "Tip amount: $" + tipAmount.toFixed(2);

        if (!totalPeople === "" || totalPeople> 1) {
            displayTotalDivided.innerText="Each person pays" + " $" + totalDivided.toFixed(2);
        }
        //console.log(typeof totalPeople);
    })
}

function erase() {
    document.getElementById("erase").addEventListener("click", function() {
        document.getElementById("mealAmount").value="";
        document.getElementById("service").value="";
        document.getElementById("numofPeople").value="";
    })
}