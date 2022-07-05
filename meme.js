let form = document.querySelector("form")
let memes = document.querySelector("#memes")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let image = document.querySelector("#image");
    let top = document.querySelector("#top");
    let bottom = document.querySelector("#bottom");

    let newDiv = document.createElement("div");
    let newButton = document.createElement("button");
    let topDiv = document.createElement("h2");
    let botDiv = document.createElement("h2");
    let newImage = document.createElement("img")
    let imageDiv = document.createElement("div");

    newImage.src = image.value;

    topDiv.innerText = top.value;
    botDiv.innerText = bottom.value;

    newImage.style.height = "400px";
    newImage.style.width = "500px";

    imageDiv.style.position = "relative";
    topDiv.style.position = "absolute";
    botDiv.style.position = "absolute";

    topDiv.style.top = '20px';
    topDiv.style.left = "10px"
    topDiv.style.zIndex = "2";
    topDiv.style.color = "white"
    topDiv.style["-webkit-text-stroke"] = "2px black";

    botDiv.style.bottom = '20px';
    botDiv.style.left = "10px";
    botDiv.style.zIndex = "2";
    botDiv.style.color = "white";
    botDiv.style["-webkit-text-stroke"] = "2px black";

    newDiv.className = "m-3";

    newButton.innerText = "Remove meme";
    newButton.className = "btn btn-secondary";
    newButton.addEventListener("click", function(e) {
        e.target.parentElement.remove();
    })

    imageDiv.append(newImage);
    imageDiv.append(topDiv);
    imageDiv.append(botDiv);
    newDiv.append(imageDiv);
    newDiv.append(newButton);

    memes.append(newDiv);

    form.reset();
});