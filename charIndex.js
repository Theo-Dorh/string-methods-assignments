function charIndex() {
    let someString = document.querySelector(".question").value;
    let srcStrng = document.querySelector(".sub-question").value;

    if (someString === "" || srcStrng === "") {
        alert("Please type a string and substring");
        return;
    }

    let res = someString.indexOf(srcStrng);

    let outputBox =  document.querySelector(".output");
    outputBox.innerHTML = "";

    let result = document.createElement("div");
    
    result.textContent = `The index of your character or substring '${srcStrng}' is "${res}"`;
    
    result.style.cssText = "padding: 10px 20px; border-radius: 50px; background-color:rgb(109, 123, 128); color: black; display: inline-block; margin-top: 10px;";

    outputBox.appendChild(result);
}