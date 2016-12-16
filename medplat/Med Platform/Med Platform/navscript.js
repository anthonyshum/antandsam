function myFunction() {
    var x = document.getElementById("fixednavul");
    if (x.className === "main") {
        x.className += " responsive";
    } else {
        x.className = "main";
    }
}