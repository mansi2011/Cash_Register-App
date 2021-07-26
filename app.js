let billAmount = document.querySelector("#bill-amount");
let cashAmount = document.querySelector("#cash-amount");
let btnCheck = document.querySelector("#btn-check");
let twoThousand = document.querySelector("#two-thousand");
let fiveHundred = document.querySelector("#five-hundred");
let hundred = document.querySelector("#hundred");
let fifty = document.querySelector("#fifty");
let twenty = document.querySelector("#twenty");
let ten = document.querySelector("#ten");
let five = document.querySelector("#five");
let one = document.querySelector("#one");
let checkDiv = document.querySelector("#check-div");
let outputDiv = document.querySelector("#output-div");
let btnNext = document.querySelector("#next");

btnNext.addEventListener('click' , function(){
    if(billAmount.value){
        checkDiv.className = "show";
    }
    else{
        alert("Enter bill amount");
    }       
    
})


btnCheck.addEventListener('click' , function(){
    let bill =  billAmount.value;
    console.log(billAmount.value);
    let paid = cashAmount.value;
    console.log(cashAmount.value);
   
    
   
    
    let totalChange = paid - bill;
    console.log(totalChange)

    if(totalChange>0){
        let _twoThousand = Math.floor(totalChange / 2000);
        let remaining = totalChange % 2000;
        console.log(_twoThousand)

        let _fiveHundred = Math.floor(remaining / 500);
        remaining = remaining %  500;
        
        let _hundred = Math.floor(remaining / 100);
        remaining = remaining % 100;

        let _fifty = Math.floor(remaining / 50);
        remaining = remaining % 50;

        let _twenty = Math.floor(remaining / 20);
        remaining = remaining % 20;

        let _ten = Math.floor(remaining / 10);
        remaining = remaining % 10;

        let _five = Math.floor(remaining / 5);
        remaining = remaining % 5;

        let _one = remaining;

        twoThousand.innerHTML = _twoThousand;
        fiveHundred.innerHTML = _fiveHundred;
        hundred.innerHTML = _hundred;
        fifty.innerHTML = _fifty;
        twenty.innerHTML = _twenty;
        ten.innerHTML = _ten;
        five.innerHTML = _five;
        one.innerHTML = _one;
        
    }else{
        alert("Please Enter Valid Scenario ")
    }
    
    


        
})

