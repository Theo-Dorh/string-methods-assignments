function retLastChar() {
    let someString = document.querySelector(".question").value;

    if (someString === "") {
        alert("Please type a string");
        return;
    }

    let res = someString.charAt(someString.length-1);

    let outputBox =  document.querySelector(".output");
    outputBox.innerHTML = "";

    let result = document.createElement("div");
    
    result.textContent = `The last character of your tring is "${res}"`;
    
    result.style.cssText = "padding: 10px 20px; border-radius: 50px; background-color:rgb(109, 123, 128); color: black; display: inline-block; margin-top: 10px;";

    outputBox.appendChild(result);
}