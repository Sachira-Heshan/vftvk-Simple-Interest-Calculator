//Update the value right next to slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
//When click the Compute Interest button show the datails like interest, principal, rate etc.
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);
    //Principal text box  validation
    if(principal<=0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }  
    else
    {
        document.getElementById("result").innerHTML = "If you deposit <span id='highlight'>" + principal + "</span>,<br>at an interest rate of <span id='highlight'>" + rate + "%</span>,<br>You will receive an amount of <span id='highlight'>" + interest + "</span>,<br>in the year <span id='highlight'>" + year + "</span>";
    }
}   