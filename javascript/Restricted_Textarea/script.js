const input = document.querySelector(".container__input")
const contador = document.querySelector(".container__contador--contador")
let LIMITE = 20
const limite = document.querySelector(".container__contador--limite")
const setlimite = document.querySelector(".container__setlimite")
const button = document.querySelector(".container__button")

const refrescar = () => {
    
  if (input.value.length <= LIMITE) {
    contador.innerHTML = input.value.length
    contador.style.color = limite.style.color = input.value.length == LIMITE ? "red" : "black"
    escrito = input.value
    
  } else {
    input.value = escrito
  }
}

const newLimite = () => {
  if (setlimite.value > 0){
    LIMITE = setlimite.value
    setlimite.placeholder = LIMITE
    setlimite.value = ""
    
  } else {
    LIMITE = parseInt(setlimite.placeholder)
  }
  
  limite.innerHTML = LIMITE
}

limite.innerHTML = LIMITE
input.addEventListener("input", refrescar)
button.addEventListener("click", newLimite)