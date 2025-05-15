 // Navbar scroll effect
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('#about, .hero-content, .hero-image');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#about, .hero-content, .hero-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);


// Education Timeline Animation
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkTimeline() {
        const triggerBottom = window.innerHeight * 0.8;
        
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            
            if(itemTop < triggerBottom) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            }
        });
    }
    
    // Initial check
    checkTimeline();
    window.addEventListener('scroll', checkTimeline);
});


// Achievements Animation
document.addEventListener('DOMContentLoaded', function() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    function checkAchievements() {
        const triggerBottom = window.innerHeight * 0.8;
        
        achievementCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            
            if(cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            }
        });
    }
    
    // Initial check
    checkAchievements();
    window.addEventListener('scroll', checkAchievements);
});