let filename = "rick.jpg"

function loadImages () {
    let imgs = document.getElementsByTagName('img');
    for(imgElt of imgs)
    {
       let file = 'images/' + filename;
       let url = chrome.extension.getURL(file)
       imgElt.src = url;
       console.log(url);
    }
}

setInterval(loadImages, 1)
