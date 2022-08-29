import { boton_SanPlus, boton_SanMinus, sandwich, boton_SalPlus, boton_SalMinus, ensalada, boton_HamPlus, boton_HamMinus, hamburguesa, boton_HotPlus, boton_HotMinus, hotdog, boton_CocPlus, boton_CocMinus, cocacola, boton_PepPlus, boton_PepMinus, pepsi, boton_FanPlus, boton_FanMinus, fanta } from "./botones.js";

import { Evento_boton } from "./funciones.js";

let qty_san = 0;
let qty_sal = 0;
let qty_ham = 0;
let qty_hot = 0;
let qty_coc = 0;
let qty_pep = 0;
let qty_fan = 0;

boton_SanPlus.addEventListener("click",()=>{
    qty_san = Evento_boton("san","+");
})

boton_SanMinus.addEventListener("click",()=>{
    qty_san = Evento_boton("san","-");
})

boton_SalPlus.addEventListener("click",()=>{
    qty_sal = Evento_boton("sal","+");
})

boton_SalMinus.addEventListener("click",()=>{
    qty_sal = Evento_boton("sal","-");
})

boton_HamPlus.addEventListener("click",()=>{
    qty_ham = Evento_boton("ham","+");
})

boton_HamMinus.addEventListener("click",()=>{
    qty_ham = Evento_boton("ham","-");
})

boton_HotPlus.addEventListener("click",()=>{
    qty_hot = Evento_boton("hot","+");
})

boton_HotMinus.addEventListener("click",()=>{
    qty_hot = Evento_boton("hot","-");
})

boton_CocPlus.addEventListener("click",()=>{
    qty_coc = Evento_boton("coc","+");
})

boton_CocMinus.addEventListener("click",()=>{
    qty_coc = Evento_boton("coc","-");
})

boton_PepPlus.addEventListener("click",()=>{
    qty_pep = Evento_boton("pep","+");
})

boton_PepMinus.addEventListener("click",()=>{
    qty_pep = Evento_boton("pep","-");
})

boton_FanPlus.addEventListener("click",()=>{
    qty_fan = Evento_boton("fan","+");
})

boton_FanMinus.addEventListener("click",()=>{
    qty_fan = Evento_boton("fan","-");
})

sandwich.addEventListener("change", ()=>{
    qty_san = Evento_boton("san", "=");
})

ensalada.addEventListener("change", ()=>{
    qty_sal = Evento_boton("sal", "=");
})

hamburguesa.addEventListener("change", ()=>{
    qty_ham = Evento_boton("ham", "=");
})

hotdog.addEventListener("change", ()=>{
    qty_hot = Evento_boton("hot", "=");
})

cocacola.addEventListener("change", ()=>{
    qty_coc = Evento_boton("coc", "=");
})

pepsi.addEventListener("change", ()=>{
    qty_pep = Evento_boton("pep", "=");
})

fanta.addEventListener("change", ()=>{
    qty_fan = Evento_boton("fan", "=");
})

export {qty_san, qty_sal, qty_ham, qty_hot, qty_coc, qty_pep, qty_fan};