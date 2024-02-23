function appendOperation(operation) {
  document.getElementById("result-area").innerHTML += operation;
}

function getResult() {
  let resultContainer = document.getElementById("result-area");
  let result = eval(resultContainer.innerHTML);
  resultContainer.innerHTML = result;
}

function deleteLast() {
  let resultContainer = document.getElementById("result-area");
  if (resultContainer.innerHTML.endsWith(" ")) {
    resultContainer.innerHTML = resultContainer.innerHTML.slice(0, -3);
  } else {
    resultContainer.innerHTML = resultContainer.innerHTML.slice(0, -1);
  }
}
