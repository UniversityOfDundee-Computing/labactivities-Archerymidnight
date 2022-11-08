

document.getElementById("5").addEventListener("click", fivePercent);
document.getElementById("10").addEventListener("click", tenPercent);
document.getElementById("25").addEventListener("click", twentyFivePercent);
document.getElementById("Largest").addEventListener("click", largestOf);

let billValue = document.getElementById("input").value;

function fivePercent() {
    let result = billValue * 0.05;
    changeValue(result);
}

function tenPercent() {
    let result = billValue * 0.1;
    changeValue(result);
}

function twentyFivePercent() {
    let result = billValue * 0.25;
    changeValue(result);
}

function largestOf(){
    let twoPlusTen = (billValue * 0.1) + 2
    let twentyFive = billValue*0.25;
    let greater = 0;

    if(twentyFive>twoPlusTen) {
        greater = twentyFive;
    }else{
        greater = twoPlusTen;
    }

    changeValue(greater);
}

function changeValue(result){
    document.getElementById("tip").innerHTML = "£"+result.toFixed(2);
}