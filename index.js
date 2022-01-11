// 1. Create an HTML page with two buttons that argue with each other. When one button is clicked
//         , the text "I'm right" should be placed next to it. When the other button is clicked,
//          the text is replaced with, "No, I'm right!"

let spanText1 = document.getElementById('first-span')
let spanText2 = document.getElementById('second-span')

function button1Click() {
    spanText1.textContent = "I am right"
    spanText2.textContent = ""
}

function button2Click() {
    spanText2.textContent = "No, I am right"
    spanText1.textContent = ""

}


//  2. Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.
//      When you hover over the element, send an alert to the user that says, "Hey, 
//      I told you not to hover over me! 

let bigBtn = document.getElementById("big-btn")

function mouseOver() {
    alert("Hey, I told you not to hover over me!")
}


// 3. Create an HTML page with a form. It should include inputs for a username, 
// email, and password. Also a submit button.

// 4. In a Javascript file, write a program which checks the following things:
//     checks that the password is 12345678
// if the password is incorrect, send an alert message
// Your page should also include an < h1 > tag.If the information in the form is correct,
//     have Javascript change the text in the < h1 > .HTML page

function loginSubmit(event) {
    event.preventDefault()
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let statusLogin = document.getElementById("status-login")


    //  checks that the password is 12345678
    if (password === "12345678") {
        statusLogin.textContent = "Password is correct"
        statusLogin.style.color = "green"
    } else {
        statusLogin.textContent = "Password is correct"
        alert("Wrong Password!")
    }



}


// BONUS: Create an HTML page with a form that asks the user to input the value of a sphere 's radius.
// Write Javascript that gives them back the volume of the sphere.(There are many different ways to execute this.
//     You can give the user information back in another input box on the page, as an alert,
//     or any other way you can think of.You can look up how to use the Javascript
//      Math object to simplify your calculations.)

function radiusSubmit(event) {
    event.preventDefault()

    let sphereVolume = document.getElementById("sphere-volume")
    let radiusValue = document.getElementById('radius-value').value;

    let radius = Math.abs(radiusValue);
    let valume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(5)
    console.log(valume);
    sphereVolume.innerHTML = `The volume: ${valume}. `;

}