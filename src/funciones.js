export function Evento_boton(tag, op){
    let qty = 0;
    let concat = "#" + tag + "_qty";
    let tagger = tag + "_qty";
    let selector = document.querySelector(concat);

    switch (op){
        case "+":
            parseInt(selector.value)<0? qty=0 : qty=parseInt(selector.value)+1;
            parseInt(selector.value)>=9999? qty=9999 : qty=parseInt(selector.value)+1;
            break;
        case "-":
            parseInt(selector.value)<1? qty=0 : qty=parseInt(selector.value)-1;
            break;
        case "=":
            selector.value<0 ? qty=0 : qty = parseInt(selector.value);
            break;
    }

    selector.value = qty;
    selector.innerHTML = `<input type="number" class="qty_item" value=${qty} min=0 max=9999 id="${tagger}">`
    return qty;
}

//                  Funciones flecha con operaciones básicas
export const suma = (a,b) => a+b;
export const resta = (a,b) => a-b;
export const multi = (a,b) => a*b;
export const division = (a,b) => a/b;
export const taxes = a => a*0.21;