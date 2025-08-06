
(function() {
    emailjs.init("R8PZ6mgN_7ga8Pfjo"); 
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        Swal.fire({ text: "Please enter your full name.", icon: "warning" });
        return;
    } else if (email === "") {
        Swal.fire({ text: "Please enter a valid email address.", icon: "warning" });
        return;
    } else if (phone === "") {
        Swal.fire({ text: "Please enter a valid phone number.", icon: "warning" });
        return;
    } else if (message === "") {
        Swal.fire({ text: "Please enter your message.", icon: "warning" });
        return;
    }

 
    emailjs.sendForm('service_iievqyf', 'template_iqli2sq', this)
        .then(() => {
            Swal.fire({ text: "Thank You For Contacting Us", icon: "success" });
            this.reset()
        }, (error) => {
            console.error('FAILED...', error);
            Swal.fire({ text: "Something Went Wrong. Please Try Again", icon: "error" });
        });
});

