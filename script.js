function appendOperation(operation) {
  document.getElementById("result-area").innerHTML += operation;
}

function getResult() {
  let resultContainer = document.getElementById("result-area");
  let result = eval(resultContainer.innerHTML);
  resultContainer.innerHTML = result;
}
