// console.log("Calculator Project");

// let screen = document.getElementById('screen');
// button = document.querySelectorAll('button');
// for(item of button){
//     item.addeventlistener('click' , (e)=>{
//         buttontext = e.target.innertext;
//         console.log(buttontext);
//     })
// }



// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// // let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);







let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'Clr') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            // screenValue = screenValue.slice(1);?
            screenValue = (screenValue.slice(0,(screenValue.length)-1));
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
