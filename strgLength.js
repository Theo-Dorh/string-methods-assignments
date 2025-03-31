function strgLength () {
    let someString = document.querySelector(".question").value;

    if (someString === "") {
        alert("Please type a string");
        return;
    }

    let length = someString.length;

    let outputBox =  document.querySelector(".output");
    outputBox.innerHTML = "";

    let result = document.createElement("div");
    
    result.textContent = `The length of your string is ${length}`;
    
    result.style.cssText = "padding: 10px 20px; border-radius: 50px; background-color: #77c0dd; color: black; display: inline-block; margin-top: 10px;";

    outputBox.appendChild(result);
}