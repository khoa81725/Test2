// JavaScript source code
function upDate(previewPic) {
    console.log("Event triggered"); // Confirm it fires
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    let imageDiv = document.getElementById("image");

    // Change background image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Change text content
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    let imageDiv = document.getElementById("image");

    // Reset background image
    imageDiv.style.backgroundImage = "url('')";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}