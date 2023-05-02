const gameContainer = document.getElementById('game-container');
const player = document.getElementById('player');
let score = 0;
let gameStarted = false;
let highest = 0;



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    const side = getRandomInt(1, 4);
    let top, left;
    switch (side) {
        case 1: // top
            top = -meteor.offsetHeight;
            left = getRandomInt(0, gameContainer.offsetWidth - meteor.offsetWidth);
            break;
        case 2: // right
            top = getRandomInt(0, gameContainer.offsetHeight - meteor.offsetHeight);
            left = gameContainer.offsetWidth;
            break;
        case 3: // bottom
            top = gameContainer.offsetHeight;
            left = getRandomInt(0, gameContainer.offsetWidth - meteor.offsetWidth);
            break;
        case 4: // left
            top = getRandomInt(0, gameContainer.offsetHeight - meteor.offsetHeight);
            left = -meteor.offsetWidth;
            break;
    }
    meteor.style.top = `${top}px`;
    meteor.style.left = `${left}px`;
    gameContainer.appendChild(meteor);
    const fallInterval = setInterval(() => {
        const playerRect = player.getBoundingClientRect();
        const meteorRect = meteor.getBoundingClientRect();
        if (playerRect.bottom > meteorRect.top &&
            playerRect.top < meteorRect.bottom &&
            playerRect.right > meteorRect.left &&
            playerRect.left < meteorRect.right) {
            clearInterval(fallInterval);
            alert(`Game over! Your score is ${score}`);
            location.reload();
        }
        meteor.style.top = `${meteor.offsetTop + 15}px`;
        meteor.style.left = `${meteor.offsetLeft + (side === 2 ? -5 : side === 4 ? 5 : 0)}px`;
        if ((side === 1 || side === 3) && meteor.offsetTop > gameContainer.offsetHeight ||
            (side === 2 || side === 4) && meteor.offsetLeft < -meteor.offsetWidth ||
            (side === 2 || side === 4) && meteor.offsetLeft > gameContainer.offsetWidth) {
            clearInterval(fallInterval);
            gameContainer.removeChild(meteor);
        }
    }, 20);
}

gameContainer.addEventListener('touchstart', () => {
    if (!gameStarted) {
        gameStarted = true;
        setInterval(() => {
            createMeteor();
            score++;
        }, 100);
    }
});


gameContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    const left = x - player.offsetWidth / 2;
    const top = y - player.offsetHeight / 2;
    if (left < 0) {
        player.style.left = '0';
    } else if (left > window.innerWidth - player.offsetWidth) {
        player.style.left = `${window.innerWidth - player.offsetWidth}px`;
    } else {
        player.style.left = `${left}px`;
    }
    if (top < 0) {
        player.style.top = '0';
    } else if (top > window.innerHeight - player.offsetHeight) {
        player.style.top = `${window.innerHeight - player.offsetHeight}px`;
    } else {
        player.style.top = `${top}px`;
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    const side = getRandomInt(1, 4);
    let top, left;
    switch (side) {
        case 1: // top
            top = -meteor.offsetHeight;
            left = getRandomInt(0, gameContainer.offsetWidth - meteor.offsetWidth);
            break;
        case 2: // right
            top = getRandomInt(0, gameContainer.offsetHeight - meteor.offsetHeight);
            left = gameContainer.offsetWidth;
            break;
        case 3: // bottom
            top = gameContainer.offsetHeight;
            left = getRandomInt(0, gameContainer.offsetWidth - meteor.offsetWidth);
            break;
        case 4: // left
            top = getRandomInt(0, gameContainer.offsetHeight - meteor.offsetHeight);
            left = -meteor.offsetWidth;
            break;
    }
    meteor.style.top = `${top}px`;
    meteor.style.left = `${left}px`;
    gameContainer.appendChild(meteor);
    const fallInterval = setInterval(() => {
        const playerRect = player.getBoundingClientRect();
        const meteorRect = meteor.getBoundingClientRect();
        if (playerRect.bottom > meteorRect.top &&
            playerRect.top < meteorRect.bottom &&
            playerRect.right > meteorRect.left &&
            playerRect.left < meteorRect.right) {
            clearInterval(fallInterval);
            if (score > highest) {
                highest = score;
                console.log(highest);
                //document.getElementById('highscore-container').innerText = highest;
                document.getElementById("highscore-container").innerText = `歷史最高分：${highest}`;
            }
            alert(`輸啦輸啦 真菜~你得了 ${score}分`);
            location.reload();

        }
        meteor.style.top = `${meteor.offsetTop + 15}px`;
        meteor.style.left = `${meteor.offsetLeft + (side === 2 ? -5 : side === 4 ? 5 : 0)}px`;
        if ((side === 1 || side === 3) && meteor.offsetTop > gameContainer.offsetHeight ||
            (side === 2 || side === 4) && meteor.offsetLeft < -meteor.offsetWidth ||
            (side === 2 || side === 4) && meteor.offsetLeft > gameContainer.offsetWidth) {
            clearInterval(fallInterval);
            gameContainer.removeChild(meteor);
        }
    }, 20);
}

gameContainer.addEventListener('touchstart', () => {
    if (!gameStarted) {
        gameStarted = true;
        setInterval(() => {
            createMeteor();
            score++;
        }, 100);
    }
});

gameContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    const left = x - player.offsetWidth / 2;
    const top = y - player.offsetHeight / 2;
    if (left < 0) {
        player.style.left = '0';
    } else if (left > window.innerWidth - player.offsetWidth) {
        player.style.left = `${window.innerWidth - player.offsetWidth}px`;
    } else {
        player.style.left = `${left}px`;
    }
    if (top < 0) {
        player.style.top = '0';
    } else if (top > window.innerHeight - player.offsetHeight) {
        player.style.top = `${window.innerHeight - player.offsetHeight}px`;
    } else {
        player.style.top = `${top}px`;
    }
});