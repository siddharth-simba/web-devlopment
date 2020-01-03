document.getElementById("loan-form").addEventListener("submit",calculateResults);

function calculateResults(e){

   const amount = document.getElementById("amount");
   const interest = document.getElementById("interest");
   const years = document.getElementById("years");
   const monthlypayment = document.getElementById("monthly-payment");
   const totalpayment = document.getElementById("total-payment");
   const totalinterest = document.getElementById("total-interest");

   const principal = parseFloat(amount.value);
   const calculatedinterest = parseFloat(interest.value)/100/12;
   const calculatedpayments = parseFloat(years.value)*12;

   const x = Math.pow(1 + calculatedinterest, calculatedpayments);
   const monthly = (principal*x*calculatedinterest)/(x-1)

   if(isFinite(monthly)){
       monthlypayment.value = monthly.toFixed(2);
       totalpayment.value = (monthly *  calculatedpayments).toFixed(2);
       totalinterest.value = ((monthly * calculatedpayments)-principal).toFixed(2);


   }
   else{
       showError("please input your number");
    
   }
   e.preventDefault();
}


function showError(error){

    const errorDiv = document.createElement("div");

    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));


    //insert error above heading

    card.insertBefore(errorDiv,heading);

window.setTimeout(clear,3000);
    
}

function clear(){
    document.querySelector('.alert').remove();
}