const chest = document.getElementById('chest');
const map = document.getElementById('map');
const hint = document.getElementById('hint');

const treasure = {
    x: Math.floor(Math.random() * 550) + 50, 
    y: Math.floor(Math.random() * 260) + 50, 
};

function showTreasure () {
    chest.style.left = treasure.x + 'px';
    chest.style.top = treasure.y + 'px';
    chest.style.display = 'block';
};

map.addEventListener('click', ({offsetX, offsetY}) => {
    const clickPoint = {
        x: offsetX,
        y: offsetY
    }

    const lenght = getLenght(clickPoint, treasure);
    if (lenght < 30) {
        hint.textContent = 'You found the treasure';
        hint.style.color = 'coral';
        showTreasure();
    } else if (lenght >= 30 && lenght <= 80) {
        hint.textContent = 'Hot!';
        hint.style.color = 'orange';
    } else if (lenght > 80 && lenght <= 130) {
        hint.textContent = 'Warm!';
        hint.style.color = 'yellow';
    }  else if (lenght > 130 && lenght <= 180) {
        hint.textContent = 'Cold!';
        hint.style.color = 'lightblue';
    } else {
        hint.textContent = 'Winter is coming...';
        hint.style.color = 'blue';
    }
});

function getLenght (p1, p2) {
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y),2));
}