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

 document.addEventListener('visibilitychange',
        function(){
            if(document.visibilityState === "visible"){
                document.title = "Portfolio | Aditi Kute";
                $("#favicon").attr("href","favicon.png");
            }
            else {
                document.title = "Come Back To Portfolio🙏";
            }
        });

    document.getElementById("year").textContent = new Date().getFullYear();
