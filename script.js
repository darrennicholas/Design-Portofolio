document.getElementById("toggle-button").addEventListener("click", function() {
    var formContainer = document.getElementById("form-container");
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
});
