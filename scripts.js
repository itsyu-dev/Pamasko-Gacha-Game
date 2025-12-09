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

        if (random < 50) number = 20; // 50% chance
        else if (random < 80) number = 50; // 30% chance
        else if (random < 95) number = 100; // 15% chance
        else number = 150; // 5% chance

        const resultDiv = document.getElementById("result");
        const messageDiv = document.getElementById("screenshotMessage");

        resultDiv.textContent = number;
        resultDiv.classList.remove('animate');
        resultDiv.classList.add('show'); 

        messageDiv.classList.add('show');

        setTimeout(() => {
            resultDiv.classList.add('animate');
        }, 10);
    }
