const themeSwitch = document.getElementById("themeSwitch");
const body = document.body;

themeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

let btn = document.querySelector("#generateBtn");

// console.log (btn);

btn.addEventListener("click", function () {
    console.log("Btn is clicked....");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.getElementById("colorBox");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");

});


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}
