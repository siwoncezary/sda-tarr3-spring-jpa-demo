function addNumbers(){
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let result = Number(numberOne) + Number(numberTwo);
    document.getElementById("result").value = result;
    document.getElementById("numberOne").value = result;
    document.getElementById("numberTwo").value = "";
    addHistoryItem(numberOne + " + " + numberTwo + " = " + result);
}
function mulNumbers(){
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let result = Number(numberOne) * Number(numberTwo);
    document.getElementById("result").value = result;
    document.getElementById("numberOne").value = result;
    document.getElementById("numberTwo").value = "";
    addHistoryItem(numberOne + " * " + numberTwo + " = " + result);
}
function divNumbers(){
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let result = Number(numberOne) / Number(numberTwo);
    document.getElementById("result").value = result;
    document.getElementById("numberOne").value = result;
    document.getElementById("numberTwo").value = "";
    addHistoryItem(numberOne + " / " + numberTwo + " = " + result);
}
function minusNumbers(){
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let result = Number(numberOne) - Number(numberTwo);
    document.getElementById("result").value = result;
    document.getElementById("numberOne").value = result;
    document.getElementById("numberTwo").value = "";
    addHistoryItem(numberOne + " - " + numberTwo + " = " + result);
}

function addHistoryItem(item){
    let ulHistory = document.getElementById("history");
    let injection = "<li class='list-group-item'>" + item + "</li>";
    ulHistory.innerHTML += injection;
}