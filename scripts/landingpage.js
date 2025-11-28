
    let html = "";
    for (let i = 0; i < 126; i++) {
        const random = Math.floor(Math.random()*10);
        html += `<div class="bubble">${random}</div>`;
    }
    document.querySelector(".bottom").innerHTML = html;