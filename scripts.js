document.addEventListener("DOMContentLoaded", function() {
        for (let i = 0; i < 60; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
            document.body.appendChild(snowflake);
        }

        document.addEventListener("click", function() {
            const music = document.getElementById("bgMusic");
            if (music.paused) {
                music.volume = 0.3;
                music.play();
            }
        }, { once: true });
    });

    function generateNumber() {
        const button = document.querySelector('.generate-btn');
        button.style.display = 'none'; 

        const random = Math.random() * 100;
        let number;

        if (random < 45) number = 20; 
        else if (random < 80) number = 50; 
        else if (random < 97) number = 100; 
        else number = 150; 

        const resultDiv = document.getElementById("result");
        const messageDiv = document.getElementById("screenshotMessage");

        resultDiv.textContent = number;
        resultDiv.classList.remove('animate');
        resultDiv.classList.add('show'); 

        messageDiv.classList.add('show');

        if (number === 150) {
            showConfetti(); 
            showGrandPrizeNotification(); 
        }

        setTimeout(() => {
            resultDiv.classList.add('animate');
        }, 10);
    }

    function showConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
        }

        setTimeout(() => {
            confettiContainer.remove(); 
        }, 5000);
    }

    function showGrandPrizeNotification() {
        const notification = document.createElement('div');
        notification.className = 'grand-prize-notification';
        notification.textContent = '🎉 Congratulations! You are the Grand Prize Winner! 🎉';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove(); 
        }, 5000);
    }
