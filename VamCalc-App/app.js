// Define Ui Vars

let form = document.querySelector('#form-loan');
let amount = document.querySelector('#amount');
let intrest = document.querySelector('#interest');
let year = document.querySelector('#year');

let monthlyPayment = document.querySelector('#monthly-payment');
let totalPayment = document.querySelector('#total-payment');
let interestPayment = document.querySelector('#intrest-payment');
let card = document.querySelector('.card-body');
let heading = document.querySelector('.heading');


// define event 
loadAllEvents();
function loadAllEvents() { 
    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        document.querySelector('.loading').style.display = 'block';
        setTimeout(calculateLoan , 3000);
    });
 }

 // Calculate Function 
 function calculateLoan(e){

    let intAmount = parseFloat(amount.value);
    let intInterst = parseFloat(intrest.value);
    let intMounth = parseFloat(year.value) * 12;


    let calcIntrest = Math.ceil((intAmount * intInterst * (intMounth +1)) / 2400) ;
    let calcMonthlyPayment = Math.ceil((calcIntrest + intAmount) / intMounth);
    let calcTotalPayment = Math.ceil(calcIntrest + intAmount);


    if(isFinite(intAmount)){
        monthlyPayment.value = calcMonthlyPayment;
        totalPayment.value = calcTotalPayment;
        interestPayment.value = calcIntrest;

        document.querySelector('.loading').style.display = 'none';    
        document.querySelector('.result').style.display = 'block';



    } else {
        showError('please check the numbers')
    }

    function showError(error){
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.result').style.display = 'none';
        let alertError = document.createElement('div')
        alertError.className = 'alert alert-danger';
        alertError.textContent = error

        card.insertBefore(alertError , heading);
        setTimeout(clearError, 3000 )
    }

    function clearError() { 
        document.querySelector('.alert').remove();
     }

    
 }