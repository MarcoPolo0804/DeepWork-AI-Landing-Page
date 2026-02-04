const hero = document.getElementById('hero-section');
        let bubbleCount = 0;

        hero.addEventListener('click', function(e) {
            // Create bubble
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubbleCount++;
            
            // Random size between 20px and 80px
            const size = Math.random() * 10 + 5;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Position at click point
            bubble.style.left = `${e.clientX - size/2}px`;
            bubble.style.top = `${e.clientY - size/2}px`;
            
            // Random color with transparency
            const hue = Math.random() * 360;
            bubble.style.background = `radial-gradient(circle at 30% 30%, 
                white(${hue}, 100%, 80%, 0.3),
                white(${hue}, 100%, 60%, 0.1))`;
            bubble.style.border = `1px solid white(${hue}, 100%, 80%, 0.3)`;
            bubble.style.boxShadow = `
                0 0 ${size/2}px white(${hue}, 100%, 80%, 0.2),
                inset 0 0 ${size/3}px rgba(255, 255, 255, 0.1)
            `;
            
            // Random floating direction
            const xDirection = Math.random() > 0.5 ? 1 : -1;
            const xDistance = Math.random() * 100 * xDirection;
            
            // Custom animation
            bubble.animate([
                {
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${xDistance}px, -100vh) scale(1.5)`,
                    opacity: 0
                }
            ], {
                duration: 12000 + Math.random() * 2000,
                easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)'
            });
            
            // Add bubble to hero
            hero.appendChild(bubble);
            
            // Remove bubble after animation completes
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.remove();
                }
            }, 5000);
        });

        
       