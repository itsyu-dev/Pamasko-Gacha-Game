document.addEventListener("DOMContentLoaded", function() {
    // Create snowflakes
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        document.body.appendChild(snowflake);
    }

    let canGenerate = true;
    const cooldownTime = 60 * 1000;

    function startCooldown() {
        const button = document.querySelector('.generate-btn');
        button.style.display = 'none';
        canGenerate = false;

        setTimeout(() => {
            button.style.display = 'inline-block';
            canGenerate = true;
        }, cooldownTime);
    }

    function generateNumber() {
        if (!canGenerate) return;

        const random = Math.random() * 100;
        let number;

        if (random < 50) number = 20;
        else if (random < 80) number = 50;
        else if (random < 97) number = 100;
        else number = 200;

        const resultDiv = document.getElementById("result");
        resultDiv.textContent = number;
        resultDiv.classList.remove('animate');
        resultDiv.classList.add('show');

        startCooldown();

        setTimeout(() => {
            resultDiv.classList.add('animate');
        }, 10);
    }

    document.querySelector('.generate-btn').addEventListener('click', generateNumber);

    document.addEventListener("click", function() {
        const music = document.getElementById("bgMusic");
        if (music.paused) {
            music.volume = 0.3;
            music.play();
        }
    });
});
