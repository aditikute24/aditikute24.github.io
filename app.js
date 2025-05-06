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
    });
})();

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Aditi Kute";
        $("#favicon").attr("href", "favicon.png");
    } else {
        document.title = "Come Back To Portfolio🙏";
        $("#favicon").attr("href", "favhand.png");
    }
});

document.getElementById("year").textContent = new Date().getFullYear();

// Add form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting immediately

    // Change the submit button text to "Submitting..."
    document.getElementById("submit-btn").innerHTML = "Submitting...";

    // Simulate the submission with a delay (this is where you can add animation)
    setTimeout(function() {
        // Change the button text after a delay
        document.getElementById("submit-btn").innerHTML = "Submitted!";
        // You can also trigger any animation or effect here
    }, 2000);  // Simulate a delay for 2 seconds
});
