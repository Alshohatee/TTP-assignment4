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