document.addEventListener('DOMContentLoaded', function () {
    const movingText = document.createElement('div');
    movingText.textContent = 'Welcome to Empowering Men';
    movingText.className = 'moving-text';
    document.body.appendChild(movingText);

    // Set the initial position of the moving text
    let position = 0;

    // Animate the text
    function animateText() {
        position += 12; // Adjust this value to control the speed of the animation
        movingText.style.left = position + 'px';

        // Reset the position when the text goes off the screen
        if (position < window.innerWidth) {
            position = -movingText.offsetWidth;
        }

        requestAnimationFrame(animateText);
    }

    animateText(); // Start the animation
});
