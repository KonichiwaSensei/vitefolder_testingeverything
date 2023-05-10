// Making a random colour generator:

// Making a function that takes a random value from the 'randColorGenLetters' array and returns it as a string
const randomHexValue = () => {
    // Made arrays of all the possible values in hex + not the hashtag
    const randColorGenLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    // Using Math functions to take a random value out of the randColorGenLetters
    const randomIndex = (Math.floor(Math.random() * randColorGenLetters.length));
    // returning a value as a string from the array 'randColorGenLetters' by using the 'randomIndex' output
    return randColorGenLetters[randomIndex]
}

// Setting a variable to be # + the calling the function 'randomHexValue's output 6x
// console.log(fullRandomcolor);



// Changing the color of the title in the header

const randomColorGenerator = () => {

    const fullRandomcolor = ('#' + randomHexValue() + randomHexValue() + randomHexValue() + randomHexValue() + randomHexValue() + randomHexValue())

    const headerTitle = document.querySelector('.main_header_title')
    headerTitle.style.color = fullRandomcolor;

    const headerText = document.querySelector('.header_text')
    headerText.innerHTML = "The colour's hexcode you see right now is: " + fullRandomcolor;

    const headerBackground = document.querySelector('header')
    headerBackground.style.backgroundColor = fullRandomcolor;

    const footerBackground = document.querySelector('footer')
    footerBackground.style.backgroundColor = fullRandomcolor;
    
    const footerTitle = document.querySelector('.footer_title')
    footerTitle.style.color = fullRandomcolor;

    const footerText = document.querySelector('.footer_text')
    footerText.innerHTML = "See that's cool, isn't it!";

    
    
    console.log(headerTitle.style.color);

}

