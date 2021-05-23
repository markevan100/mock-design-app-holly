function deleteItem(event) {
  event.target.remove()
}

const input = document.getElementById("objective-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("objective-sumbit").click();
  }
});

function submitObjective() {
  const inputText = document.getElementById("objective-input").value;
  document.getElementById("objective-input").value = '';
  const newElement = createNewElement(inputText)
  document.getElementById("list").appendChild(newElement)
}

function createNewElement(inputText) {
  const newElement = document.createElement("li")
  newElement.innerHTML = inputText;
  newElement.classList.add("objective__item")
  newElement.setAttribute('onclick', "deleteItem(event)")
  return newElement
}
