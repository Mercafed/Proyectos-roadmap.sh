function cambiarTab(tab){
  console.log("llego")
  let tabInicial = document.querySelector(".container_tab.activa")  
  let tabNuevo = document.querySelector(`.container_tab.--${tab}`)
  
  tabInicial.classList.remove("activa")
  tabNuevo.classList.add("activa")
}
