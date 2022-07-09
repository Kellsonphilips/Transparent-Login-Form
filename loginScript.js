
const showBtn = document.querySelector(".show");
const pass_field = document.querySelector(".pass-key");


showBtn.addEventListener("click", function () {
    if (pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.style.color = "#3498db";
        showBtn.textContent = "HIDE";
    } else {
        pass_field.type = "password";
        showBtn.style.color = "#222";
        showBtn.textContent = "SHOW"
    }
});