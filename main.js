let local = localStorage;
document.addEventListener('DOMContentLoaded', () => {
    const loginData = local.getItem('loginData');
    const registeredData = local.getItem('registeredData');
  
    if (loginData !== registeredData) {
      window.location.href = 'login.html';
    }
  });

  function logout(){
    local.removeItem("loginData");
    window.location.assign("login.html")
}

// script.js

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".navbar a");
  const contents = document.querySelectorAll(".content");

  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();

          // Remove active class from all contents
          contents.forEach(content => content.classList.remove("active"));

          // Get the content ID from the data-content attribute
          const contentId = this.getAttribute("data-content");

          // Add active class to the selected content
          document.getElementById(contentId).classList.add("active");
      });
  });
});
