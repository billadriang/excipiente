const valor = document.getElementById("valor")
const caps = document.getElementById("caps")
const pp = document.getElementById("pp")

pp.onchange = () => {
  let numCaps = caps.value
  let pparcial = pp.value
  if(numCaps == 30){
    valor.innerHTML =`${9 - pparcial} gramos de excipiente`
  } if(numCaps == 60){
    valor.innerHTML =`${18.5 - pparcial} gramos de excipiente`
  } if(numCaps == 90){
    valor.innerHTML =`${28.5 - pparcial} gramos de excipiente`
  } if(numCaps == 120){
    valor.innerHTML =`${37 - pparcial} gramos de excipiente`
  } if(numCaps == 150){
    valor.innerHTML =`${48 - pparcial} gramos de excipiente`
  } if(numCaps == 180){
    valor.innerHTML =`${56 - pparcial} gramos de excipiente`
  } if( numCaps > 180) {
    let raro = (numCaps * 56) / 180
    valor.innerHTML =`${raro - pparcial} gramos de excipiente`
  } else{
    let raro = (numCaps * 28.5) / 90
    valor.innerHTML =`${raro - pparcial} gramos de excipiente`
  }
}


// let capsulasChicas = {
//   30: 9,
//   60: 18.5,
//   90: 28.5,
//   120: 37,
//   150: 48,
//   180: 56,
//   'unidad': 'gramos'
// }
// console.log(Object.values(capsulasChicas).includes(30))

// valor.innerHTML = 'Cuantas capsulas son?'
// entrada.onchange = () => {
//   const numCapsulas = entrada.value
//   if (numCapsulas == 30) {
//     const vol = 9
//     valor.innerHTML = 'Cual es el peso parcial de la receta?'
//     let exp = vol - entrada.value 
//     console.log(exp)
//     } else{
//   console.log('no existe')
// }
// }


// entrada.onchange = () => {
//   const pesoParcial = entrada.value
//   // valor.innerHTML = pesoParcial
//   if (pesoParcial <= 28.5) {
//     valor.innerHTML = 28.5 - pesoParcial
//   }
//   else{
//     console.log("nada")
//   }
// }
