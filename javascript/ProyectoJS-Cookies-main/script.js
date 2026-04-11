let elementCookies = document.querySelector(".cookies")
let elementCookiesButton = document.querySelector(".cookies__button")
let elementCookiesX = document.querySelector(".cookies__x")

function desactivar() {
  elementCookies.classList.add("desactivo")
}

elementCookiesButton.addEventListener("click", desactivar)
elementCookiesX.addEventListener("click", desactivar)
