document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.nav');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('nav-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.li');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('li-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.h2');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('h2-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.H2S3');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('H2S3-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.AboutMeDiv');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('StandardAnimationDiv');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.imgMe');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('imgMeAnimate');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.AboutMeH2');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('StandardAnimationH2');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.AboutMeP');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('StandardAnimationP');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Selecteer het .stwocolor element
    const stwocolorElement = document.querySelector('.stwocolor');
    const scrollElement = document.querySelector('.h2');
    const backgroundElement = document.querySelector('.background');
    const sOneElement = document.querySelector('.s-one');
    
    // Observer voor wanneer het background element in beeld komt
    const observerBackground = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Voeg de klasse stwocolorwhite toe wanneer .background in beeld komt
                if (stwocolorElement) {
                    stwocolorElement.classList.add("stwocolorwhite");
                    stwocolorElement.classList.remove("stwocolor");  // Verwijder de zwarte achtergrond

                    scrollElement.classList.add('remove')
                }
            }
        });
    });

    // Observer voor wanneer de .s-one sectie in beeld komt
    const observerSOne = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            /*if (entry.isIntersecting) {
                // Verwijder de klasse stwocolorwhite en herstel .stwocolor
                if (stwocolorElement) {
                    stwocolorElement.classList.add("stwocolor");
                    stwocolorElement.classList.remove("stwocolorwhite");
                }
            }*/
        });
    });

    // Start observatie voor beide elementen
    if (backgroundElement) {
        observerBackground.observe(backgroundElement);
    }

    if (sOneElement) {
        observerSOne.observe(sOneElement);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Selecteer de video en het background-element
    const videoElement = document.querySelector('.auto-play-video');
    const backgroundElement = document.querySelector('.background');

    // Observer voor wanneer het background-element in beeld komt
    const observerBackground = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Speel de video af wanneer de background div in beeld komt
                if (videoElement) {
                    videoElement.play();
                }
            } else {
                // Pauzeer de video wanneer de background div uit beeld is
                if (videoElement) {
                    videoElement.pause();
                }
            }
        });
    });

    // Start het observeren van het background-element
    if (backgroundElement) {
        observerBackground.observe(backgroundElement);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.background');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('background-viewed');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.vaardigheid-R');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('vaardigheid-R-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.vaardigheid-L');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('vaardigheid-L-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.h2-s4');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('h2-s4-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.li-s4');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('li-s4-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.Talen');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('Talen-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.opleiding2');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opleiding2-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.Hobby’s');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('Hobby’s-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.opleiding1');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opleiding1-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.h2-s6');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('h2-s6-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.li-s6');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('li-s6-animation');
                // Stop met observeren na de eerste keer
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});