document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const navbar = header.querySelector('.navbar');
  const menuButton = header.querySelector('.menu');
  const backToTopButton = document.getElementById('myBtn');

  // header scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
    navbar.classList.remove('show');
    backToTopButton.style.display = window.scrollY > 20 ? 'block' : 'none';
  });

  // responsive menu
  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });

  // back to top
  backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fong_vanessa@hotmail.com",
    Password: "6F916BAD45A393C0E5EBF9102AD6C585BC78",
    To: "fong_vanessa@hotmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " + document.getElementById("name").value +
      "<br> Email: " + document.getElementById("email").value +
      "<br> Phone: " + document.getElementById("phone").value +
      "<br> Message: " + document.getElementById("message").value
  })
    .then(
      (message) => {
        alert("Message sent successfully");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        return false;
      },
      (error) => {
        alert("Error: " + error);
        return false;
      }
    );
}
