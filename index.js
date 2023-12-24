window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.forEach(function(element, index) {
        let imageOffset = scrollPosition * 0.4 * (index === 0 ? -1 : 1); 
        element.style.backgroundPositionY = imageOffset + 'px'; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const backBtn = document.querySelector('.back a');
  backBtn.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

