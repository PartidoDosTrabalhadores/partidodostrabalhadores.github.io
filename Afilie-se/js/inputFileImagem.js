inputsFile = ["RG-CNH-frente", "RG-CNH-tras", "foto-rosto"]
for (let i = inputsFile.length - 1; i >= 0; i--) {
    inputsFile[i] = document.getElementById(inputsFile[i])
    let parent = inputsFile[i].parentElement;
    parent.style.backgroundImage = "URL(" + parent.getAttribute("imgOriginal") + ")";
    inputsFile[i].addEventListener("change", (evento) => {
        let reader = new FileReader();
        let file = evento.target.files[0];
        let parent = evento.target.parentElement;


        if (file) {
            reader.readAsDataURL(file);

            reader.onloadend = function () {
                parent.style.backgroundImage = "URL(" + reader.result + ")";
                let img = new Image();
                img.src = reader.result;

                img.onload = function () {
                    parent.children[1].value = reader.result;
                    loader.style.display = "none";
                }
            }

            let loader = document.getElementById("loader-background");
            loader.style.display = "block";
        } else {
            // parent.style.backgroundImage = "URL(" + parent.getAttribute("imgOriginal") + ")";
            // parent.children[1].value = "";
            // loader.style.display = "none";
        }
    });
}