/*==================== TOGGLE ICON NAVBAR (Mobile) ====================*/
        // Note: You can add mobile menu logic here later

        /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                };
            });

            /*==================== STICKY NAVBAR ====================*/
            let header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);
        };

        /*==================== SCROLL REVEAL ANIMATION ====================*/
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

        /*==================== TYPED JS ANIMATION ====================*/
        const typed = new Typed('.multiple-text', {
            strings: ['Web Developer', 'MCA Student', 'Frontend Coder', 'Tech Enthusiast'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        const cards = document.querySelectorAll('.tilt-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    // 1. Get the dimensions of the card
    const rect = card.getBoundingClientRect();
    
    // 2. Calculate mouse position relative to the card
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    
    // 3. Find the center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 4. Calculate rotation (max 20 degrees)
    // If mouse is on left, rotate Y negative. If right, positive.
    const rotateX = ((y - centerY) / centerY) * -20; 
    const rotateY = ((x - centerX) / centerX) * 20;

    // 5. Apply the transformation
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  // Reset when mouse leaves
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    card.style.transition = 'transform 0.5s ease'; // Smooth return
  });

  // Remove transition when entering so movement is instant
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
  });
});