function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function createRectangle(root, label) {
    const rectangle = document.createElement("div");
    rectangle.className = "rectangle";
    rectangle.innerText = label;
    root.appendChild(rectangle);
}

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById('container');
    var btn = document.getElementById('btn')

    function generateRandomRectangles(n) {
        const numbers = shuffle(Array.from({ length: n }, (_, index) => (index + 1)))
        numbers.forEach((item) => {
            createRectangle(container, item)
        })
    }

    function randomRectangles() {
        var rectangles = document.querySelectorAll('.rectangle')
        const randomIndex = Math.floor(Math.random() * rectangles.length);
        
        rectangles[randomIndex].classList.add('moveUp')
        rectangles[randomIndex + 1].classList.add('moveDown')

        // setTimeout(function() {
        //     rectangles[randomIndex].classList.remove('moveUp');
        //     rectangles[randomIndex + 1].classList.remove('moveDown')
        // }, 1000);

        console.log(rectangles[randomIndex].getBoundingClientRect())

        rectangles[randomIndex].addEventListener('animationend', function() {
            rectangles[randomIndex].classList.remove('moveUp')
        }, { once: true })

        rectangles[randomIndex + 1].addEventListener('animationend', function() {
            rectangles[randomIndex + 1].classList.remove('moveDown')
        }, { once: true })
    }

    btn.addEventListener('click', randomRectangles)

    var n = 10
    generateRandomRectangles(parseInt(n, 10));
});
