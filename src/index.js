import { items, productos, tipos, precios, resumen_product, resumen_type, resumen_price, resumen_qty } from "./variables.js"

import { menu } from "./menu.js"

import { qty_san, qty_sal, qty_ham, qty_hot, qty_coc, qty_pep, qty_fan } from "./eventos.js";

import { fin, reset } from "./botones.js";
import { suma, resta, multi, division, taxes } from "./funciones.js";

let subto = 0;
let cantidad = 0;
let cuenta_tax = 0;

let sesion = JSON.stringify(localStorage.getItem('cantidad'));
let carrito = [];

if(sesion){
    carrito = JSON.parse(sesion);
    console.log(typeof carrito);
}

for(const catalogo of menu){
    items.push(catalogo.item);
    productos.push(catalogo.producto);
    tipos.push(catalogo.tipo);
    precios.push(catalogo.precio);
}

fin.addEventListener("click", () =>{
    resumen_qty[0] = qty_san;
    resumen_qty[1] = qty_sal,
    resumen_qty[2] = qty_ham;
    resumen_qty[3] = qty_hot;
    resumen_qty[4] = qty_coc;
    resumen_qty[5] = qty_pep;
    resumen_qty[6] = qty_fan;

    for(let i=0; i<resumen_qty.length; i++){
        resumen_price.push(multi(resumen_qty[i], precios[i]));
    }

    for(let i=0; i<resumen_qty.length; i++){
        subto = suma(subto,resumen_price[i]);
        cantidad = suma(cantidad, resumen_qty[i]);
    }

    subto = division(parseInt(multi(subto,100)),100);
    cuenta_tax = division(parseInt(multi(taxes(subto),100)),100);
    let total = subto + cuenta_tax;

    let subtotal = document.querySelector("#subtotal");
    let tax = document.querySelector("#IVA");
    let fullPrice = document.querySelector("#total");

    subtotal.innerHTML = `Subtotal: USD ${subto}`;
    tax.innerHTML = `IVA: USD ${cuenta_tax}`;
    fullPrice.innerHTML = `Total a pagar: USD ${total}`;

    const enJSON = JSON.stringify(resumen_qty);
    localStorage.setItem('cantidad', enJSON);
    console.log(enJSON);

    resumen_price.splice(0, resumen_price.length);
    subto = 0;
    cantidad = 0;
})