



var subTypeElement = document.querySelector("#subscription");
var subDurationElemnt = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";    
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) { 
    subType = e.target.value;
    updateSubscriptionDiv();
});



subDurationElemnt.addEventListener("change", function (e){
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
    // console.log(e);
});

    var updateSubscriptionDiv = function () {
        var monthlyCost = 5;
        if (subType === "premium") {
            monthlyCost = 10;
      } else if (subType === "standard") {
        monthlyCost = 7;
      }
    var total = subDuration*monthlyCost;
    result.innerText = `You have chosen ${subDuration} month ${subType} plan for $${total}`;
    };