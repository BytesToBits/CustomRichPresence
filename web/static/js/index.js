const debug = false

const elements = {
    load: document.getElementById("load"),
    content: document.getElementById("content")
}

const inputFields = {
    client: document.getElementById('client'),
    state: document.getElementById('state'),
    details: document.getElementById('details'),
    largeImgName: document.getElementById('largeImgName'),
    largeImgTooltip: document.getElementById('largeImgTooltip'),
    smallImgName: document.getElementById('smallImgName'),
    smallImgTooltip: document.getElementById('smallImgTooltip'),
    buttonLabel: document.getElementById('buttonLabel'),
    buttonLink: document.getElementById('buttonLink')
}

if (!debug) {

    window.addEventListener('load',(event) => {
        content.style.display = "none"
        let bgColor = document.body.style.backgroundColor
    
        document.body.style.backgroundColor = "#1a1a1a"
    
        setTimeout(() => {
            elements.load.style.display = "none"
            
            setTimeout(() => {
                document.body.style.backgroundColor = bgColor
                elements.content.style.display = "flex"
            }, 1000)
        }, 3000)
    })
} else {
    elements.load.style.display = "none";
}

function setPresence(oldHTML) {

    let _info = {};
    inputFields.state.value = inputFields.state.innerText
    inputFields.details.value = inputFields.details.innerText
    for (let element in inputFields) {
        if (element != "state" || element != "details")
            _info[element] = inputFields[element].value
    }

    eel.setPresence(_info)((success) => {
        document.getElementById("run").innerHTML = oldHTML

        let popup = {
            container: document.getElementById("popup"),
            title: document.getElementById("popupTitle"),
            text: document.getElementById("popupDesc"),
        }

        if (success == "true") {
            popup.title.innerText = "Rich Presence Set"
            popup.text.innerText = "Your Rich Presence was set! If you don't see it, be patient! It might take some time to update."
            popup.container.style.backgroundColor = "#2dbc05"
        } else {
            popup.title.innerText = "An Error occurred"
            popup.text.innerText = "There was an error updating your rich presence. Make sure all input fields have valid values! If you can't fix this, create an issue on the github page."
            popup.container.style.backgroundColor = "#f44747"
        }

        popup.container.style.right = "10px"

        setTimeout(() => {
            popup.container.style.right = "-50%"
        }, 5000)
    })

}

document.getElementById("run").addEventListener('click', () => {
    let oldHTML = document.getElementById("run").innerHTML
    document.getElementById("run").innerHTML = "<i class='spin fas fa-cog'></i>"

    setPresence(oldHTML)
})

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};