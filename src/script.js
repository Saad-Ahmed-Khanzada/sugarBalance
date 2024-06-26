document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = '<h1 class="text-xl text-red-600 font-bold text-center">Hello, World!</h1>';
});

document.getElementById("changeTextButton").addEventListener("click", function () {
    document.getElementById("textToChange").innerText = "The text has been changed!";
});



// document.getElementById("popupButton").addEventListener("click", function() {
//     alert("This is a popup message!");
// });
