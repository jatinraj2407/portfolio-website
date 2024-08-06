<script>
  // Toggle contact form visibility
document.getElementById('message-me-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  const formContainer = document.getElementById('contact-form-container');
  
  // Toggle the 'show' class to handle visibility and transition
  formContainer.classList.toggle('show');
});


  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Show or hide the "Back to Top" button
  window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Smooth scroll to top when the button is clicked
  document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
</script>
