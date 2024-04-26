let result: string = "";

function appendToResult(value: string): void {
  result += value;
  (document.getElementById("result") as HTMLInputElement).value = result;
}

function clearResult(): void {
  result = "";
  (document.getElementById("result") as HTMLInputElement).value = result;
}

function calculateResult(): void {
  try {
    result = eval(result);
    (document.getElementById("result") as HTMLInputElement).value = result;
  } catch (error) {
    alert("Invalid expression");
    clearResult();
  }
}
