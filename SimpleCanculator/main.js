var result = "";
function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}
function clearResult() {
    result = "";
    document.getElementById("result").value = result;
}
function calculateResult() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    }
    catch (error) {
        alert("Invalid expression");
        clearResult();
    }
}
