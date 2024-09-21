async function fetchapi(){
    const response = await fetch('https://download.quranicaudio.com/qdc/abdul_baset/mujawwad/1.mp3');
    let div  = document.createElement('div')
    div.innerHTML = `<audio controls src="${response.url}"></audio>`
    document.body.appendChild(div)
}
fetchapi();