const buttonTest = document.getElementById("testar");
const buttonClear = document.getElementById("limpar")
const lista = document.querySelectorAll(".url");

buttonTest.addEventListener("click", () => {

    for (let i = 0; i < lista.length; i++) {
        const status = conectaURL(lista[i].innerHTML + '/help',i);
    }

})

buttonClear.addEventListener("click", () => {

    for (let i = 0; i < lista.length; i++) {
        lista[i].classList.remove("ok");
        lista[i].classList.remove("erro");
    }

})

function conectaURL(URL, i) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", URL);

    xhr.addEventListener("load", function() {
        console.log(URL +" - "+ xhr.status) 

        if (xhr.status == 200) {
            lista[i].classList.add("ok")
        }else {
            lista[i].classList.add("erro")
        }

    })

    xhr.send();
}