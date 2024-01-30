const imgEl = document.getElementById('random-image');

const srcArray = ['Img\Seal.jpeg', 'Img\Sad Fella.jpeg', 'Img\FaejXkBWQAESLkZ.jpeg', 'Img\F3RNdgKa4AATVJW.jpeg'];
// Stores path to images in an array

imgEl.addEventListener('click', () => {
    randomImage();
    // Runs randomImage function when user clicks on image
});

let index;
// Current image index

randomImage();
function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);
    // Generates random number between 0 and array length-1 (because Math.floor rounds)

    if (randomIndex !== index) {
    // If number NOT same as current image index...

        imgEl.src = srcArray[randomIndex];
        //...set as image src

        index = randomIndex;
        //...and as new current index value

    } else {
    // If number same as current index value (repeat)...

        randomImage();
        //...start function from beginning again

    }