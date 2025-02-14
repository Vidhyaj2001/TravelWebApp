document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.querySelector(".about p");
    const readMoreBtn = document.getElementById("about-btn");
    
    const fullText = aboutText.innerHTML;
    const shortText = fullText.slice(0, 150) + "...";
    
    let isExpanded = false;
    aboutText.innerHTML = shortText;
    
    readMoreBtn.addEventListener("click", function () {
        if (isExpanded) {
            aboutText.innerHTML = shortText;
            readMoreBtn.innerText = "Read More...";
        } else {
            aboutText.innerHTML = fullText;
            readMoreBtn.innerText = "Read Less";
        }
        isExpanded = !isExpanded;
    });
    
    const bookingForm = document.querySelector(".book form");
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your booking has been submitted successfully!");
        bookingForm.reset();
    });
    
    const bookNowLinks = document.querySelectorAll(".Packages a");
    bookNowLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("book").scrollIntoView({ behavior: "smooth" });
        });
    });
    
    const searchInput = document.querySelector(".d-flex input");
    const searchButton = document.querySelector(".d-flex button");
    
    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            alert("Searching for: " + query);
        } else {
            alert("Please enter a search term.");
        }
    });
});
