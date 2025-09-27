document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out, Parkhi will get back to you soon!");
    this.reset();
});

function downloadResume() {
    alert("Resume downloaded!");
}
