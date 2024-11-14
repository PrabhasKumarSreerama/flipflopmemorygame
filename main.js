const imgArray = [
    { id: 1, image: './images/grapes.jpg', newAlt: 'grapes' },
    { id: 2, image: './images/grapes.jpg', newAlt: 'grapes' },
    { id: 3, image: './images/peach.png', newAlt: 'peach' },
    { id: 4, image: './images/kiwi.png', newAlt: 'kiwi' },
    { id: 5, image: './images/kiwi.png', newAlt: 'kiwi' },
    { id: 6, image: './images/peach.png', newAlt: 'peach' },
    { id: 7, image: './images/plum.png', newAlt: 'plum' },
    { id: 8, image: './images/plum.png', newAlt: 'plum' }
];

const fruits = document.getElementsByClassName('card');
const allFruits = document.getElementsByClassName('fruit-img');
const restart = document.getElementById('restart-btn');
const movesText = document.querySelector('.moves');
const result = document.querySelector('.result-display');
let revealedFruits = [];
let moveCount = 0;
let revealedFruitCount = 0;

const restartGame = () => {
    let revealedFruit = document.getElementsByClassName('card reveal');
    imgArray.sort(() => Math.random() - 0.5);

    Array.from(revealedFruit).forEach((el) => {
        el.classList.remove("reveal");
        el.classList.remove("unclickable");
    });

    revealedFruits.length = 0;
    moveCount = 0;
    revealedFruitCount = 0;
    movesText.innerText = `${moveCount}`;
    let allImagesSrc = document.getElementsByClassName('fruit-img');
    Array.from(allImagesSrc).forEach((el, index) => {
        el.src = imgArray[index].image;
        el.alt = imgArray[index].newAlt;
        el.id = imgArray[index].id;
    });
    result.style.display="none";
};

restartGame();

restart.addEventListener('click', restartGame);

for (var i = 0; i < fruits.length; i++) {
    fruits[i].addEventListener('click', function () {
        this.classList.add("unclickable");
        this.classList.add("reveal");
        revealedFruits.push(this);
        let thisImgSrc = this.querySelector('.fruit-img').src;
        let previousImgSrc = revealedFruits[revealedFruits.length - 2].querySelector('.fruit-img').src;
        if(thisImgSrc !== previousImgSrc) {
            revealedFruits.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("reveal");
                    el.classList.remove("unclickable");
                }, 500);
            })
            revealedFruits.length = 0;
            moveCount++;
        }
        else{
            revealedFruits.length = 0;
            moveCount++;
            revealedFruitCount++;
        }
        movesText.innerText = `${moveCount}`;
        if(revealedFruitCount===4){
            result.style.display="block";
            const movesWin=document.getElementById('moves-win');
            movesWin.innerText=`${moveCount}`
        }
    })
}
