const crianca = document.querySelector('.mario');
const pipe = document.querySelector('.barril');
const cloud = document.querySelector('.cloud');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = () => {

    crianca.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const milhoPosition = pipe.offsetLeft;
    const crincaPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (milhoPosition <= 100 && milhoPosition > 0 && milhoPosition < 60) {

        milho.style.animation = 'none';
        milho.style.left = `${pipePosition}px`;

        crianca.style.animation = 'none';
        crianca.style.bottom = `${marioPosition}px`;

        crianca.src = 'assets/imgs/game-over.png';
        crianca.style.width = '70px';
        crianca.style.marginLeft = '35px';

        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
    }
}, 10);

const restart = () => {

    gameOver.style.visibility = 'hidden';

    barril.style.animation = 'pipe-animations 1.5s infinite linear';
    barril.style.left = ``;

    crianca.src = 'assets/imgs/mario.gif';
    crianca.style.width = '130px';
    crianca.style.bottom = '0px';
    crianca.style.marginLeft = '';
    crianca.style.animation = '';

    cloud.style.left = ``;

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    
        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {
    
            barril.style.animation = 'none';
            barril.style.left = `${pipePosition}px`;
    
            crianca.style.animation = 'none';
            crianca.style.bottom = `${marioPosition}px`;
    
            crianca.src = 'assets/imgs/game-over.png';
            crianca.style.width = '70px';
            crianca.style.marginLeft = '35px';
    
            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;
    
            gameOver.style.visibility = 'visible';
    
            clearInterval(loop);
        }
    }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);
