const container = document.createElement("div");
const canvas = document.createElement("canvas");
const time = document.createElement("h1");

container.id = "container";
container.style.display = "flex";
container.style.justiftContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";

canvas.id = "icon";
canvas.width = "10";
canvas.height = "10";

time.id = 'timehere';
time.style.fontFamily ="'Nova Mono', monospace";
time.style.position = "relative";
time.style.left = "-10px";
time.style.alignSelf = "center";
time.style.margin = "auto";
time.style.textAlign = "center";
time.style.color = "white";
time.style.mixBlendMode = "difference";

document.body.appendChild(container);
container.appendChild(canvas);
container.appendChild(time);

let timeColor;

function draw() {
    var canvas = document.getElementById("icon");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = timeColor;
        ctx.fillRect(0, 0, 16, 16);
    }

    canvas.toBlob(function (blob) {
        var newImg = document.createElement('img'),
            url = URL.createObjectURL(blob);

        //Learn what this does...
        newImg.onload = function () {
            URL.revokeObjectURL(url);
        };
        const ico = document.createElement("link");
        ico.id = "favicon";
        ico.setAttribute('rel', 'icon');
        ico.setAttribute('type', 'image/png');
        ico.setAttribute('href', url);
        document.head.replaceChild(ico, document.getElementById("favicon"));
        const t = setTimeout('draw()', 1000);
    })
}

function mytime() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    document.getElementById('timehere').innerHTML = h + ":" + m + ":" + s;
    timeColor = `#${h}${m}${s}`;
    document.body.style.backgroundColor = timeColor;
    const t = setTimeout('mytime()', 500);
}