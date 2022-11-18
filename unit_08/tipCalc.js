

$("#5").click(fivePercent);
$("#10").click(tenPercent);
$("#25").click(twentyFivePercent);
$("#Largest").click(largestOf);


function fivePercent() {
    let billValue = $("#total").val();
    let result = billValue * 0.05;
    changeValue(result);
}

function tenPercent() {
    let billValue = $("#total").val();
    let result = billValue * 0.1;
    changeValue(result);
}

function twentyFivePercent() {
    let billValue = $("#total").val();
    let result = billValue * 0.25;
    changeValue(result);
}

function largestOf() {
    let billValue = $("#total").val();
    let twoPlusTen = (billValue * 0.1) + 2
    let twentyFive = billValue * 0.25;
    let greater = 0;

    if (twentyFive > twoPlusTen) {
        greater = twentyFive;
    } else {
        greater = twoPlusTen;
    }

    changeValue(greater);
}

function changeValue(result) {
    
    let amount = result.toFixed(2);
    $("#tip").text(amount);
    updateStyle(amount);
    
}

function updateStyle(amount){

    let currentStyle = $("#tip").attr("class");
    $("#tip").removeClass(currentStyle);
    if(amount<5) {
        $("#tip").addClass("smallTip");
    } else if(amount>10) {

        $("#tip").addClass("largeTip");
    } else{
        $("#tip").addClass("mediumTip");
    }
}
