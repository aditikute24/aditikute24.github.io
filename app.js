(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.querySelector('.right-contact form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform any additional actions here, e.g., validation, custom API call, etc.

    // After custom actions, you can submit the form programmatically if needed
    event.target.submit();
});

