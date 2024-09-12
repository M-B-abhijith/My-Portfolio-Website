const phrases = ["Web Developer", "UI/UX Designer", "Btech Student"];

    let currentPhrase = 0;
    let currentChar = 0;
    const textElement = document.getElementById('animated-text');

    function updateText() {
        textElement.innerHTML = phrases[currentPhrase].substring(0, currentChar);
        if (currentChar < phrases[currentPhrase].length) {
            currentChar++;
            setTimeout(updateText, 225); // Adjust the speed of typing
        } else {
            setTimeout(changePhrase, 1200); // Wait for 2 seconds before changing the phrase
        }
    }

    function changePhrase() {
        currentChar = 1;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(updateText, 500); // Delay before starting to type the next phrase
    }

    updateText(); // Start the animation

  
    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }


   
    


 
