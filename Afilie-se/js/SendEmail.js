var form = document.getElementById("formulario");

async function handleSubmit(event) {
    let loader = document.getElementById("loader-background");
    loader.style.display = "block";
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            message.style.display = "block";
            loader.style.display = "none";
            form.reset();
            let formImgFile = document.getElementsByClassName('form-img-file');
            for (let imgFile of formImgFile) {
                imgFile.style.backgroundImage = "URL(" + imgFile.getAttribute("imgOriginal") + ")";
                imgFile.children[1].value = "";
            }
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    // status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    // status.innerHTML = "Oops! There was a problem submitting your form";
                }
            })
        }
    }).catch(error => {
        // status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
let message = document.getElementById("message-afilicao");
let buttonClose = message.children[0].children[0].children[0];
buttonClose.onclick = function () {
    message.style.display = "none";
}