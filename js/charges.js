let divCharges = document.getElementById("charges")
let chargesImgs = [
    "charge bozo fundo do poco.png",
    "fila desenrola brasil.png",
]
for (let i = 0; i < chargesImgs.length; i++) {
    let img = new Image()
    img.src = "images/charges/" + chargesImgs[i]
    img.draggable = false
    img.className = "chargeCard"
    divCharges.appendChild(img)
}