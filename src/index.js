import { items, productos, tipos, precios, resumen_product, resumen_type, resumen_price, resumen_qty } from "./variables.js"

import { menu } from "./menu.js"

import { qty_san, qty_sal, qty_ham, qty_hot, qty_coc, qty_pep, qty_fan } from "./eventos.js";

import { fin, reset } from "./botones.js";
import { suma, resta, multi, division, taxes } from "./funciones.js";

let subto = 0;
let cantidad = 0;
let cuenta_tax = 0;

//resumen_type = localStorage.getItem('cantidad');

//              Variables de proceso
/*let prod=0;
let pay = 0;
let estado=0;
let subto=0;
let cuenta_tax=0;
let cantidad = 0;
let cantidad_total=0;
let med_pago = 0;
const items = [];
const productos =   [];
const tipos = [];
const precios = [];
const resumen_product=[];
const resumen_type = []
const resumen_price = [];
const resumen_qty = [];*/

//                  Cantidades de cada producto
/*let qty_san = 0;
let qty_sal = 0;
let qty_ham = 0;
let qty_hot = 0;
let qty_coc = 0;
let qty_pep = 0;
let qty_fan = 0;*/

//                  Creación objetos DOM
/*let boton_SanPlus = document.querySelector("#san_plus");
let boton_SanMinus = document.querySelector("#san_minus");
let sandwich = document.querySelector("#san_qty");
let boton_SalPlus = document.querySelector("#sal_plus");
let boton_SalMinus = document.querySelector("#sal_minus");
let ensalada = document.querySelector("#sal_qty");
let boton_HamPlus = document.querySelector("#ham_plus");
let boton_HamMinus = document.querySelector("#ham_minus");
let hamburguesa = document.querySelector("#ham_qty");
let boton_HotPlus = document.querySelector("#hot_plus");
let boton_HotMinus = document.querySelector("#hot_minus");
let hotdog = document.querySelector("#hot_qty");
let boton_CocPlus = document.querySelector("#coc_plus");
let boton_CocMinus = document.querySelector("#coc_minus");
let cocacola = document.querySelector("#coc_qty");
let boton_PepPlus = document.querySelector("#pep_plus");
let boton_PepMinus = document.querySelector("#pep_minus");
let pepsi = document.querySelector("#pep_qty");
let boton_FanPlus = document.querySelector("#fan_plus");
let boton_FanMinus = document.querySelector("#fan_minus");
let fanta = document.querySelector("#fan_qty");
let fin = document.querySelector("#pagar");
let reset = document.querySelector("#reset");*/

//                  Funciones flecha con operaciones básicas
/*const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const multi = (a,b) => a*b;
const division = (a,b) => a/b;
const taxes = a => a*0.21;*/

//                  Objeto con todo el protafolio de productos
/*const menu = [  {item: 1, producto: "Sandwich", tipo:"comida", precio: 3.5},
                {item: 2, producto: "Ensalada", tipo:"comida", precio: 4.5},
                {item: 3, producto: "Hamburguesa", tipo: "comida", precio: 6.5},
                {item: 4, producto: "Hot Dog", tipo:"comida", precio:4.99},
                {item: 5, producto: "Coca-Cola", tipo: "bebida", precio: 3},
                {item: 6, producto: "Pepsi", tipo: "bebida", precio: 2.8},
                {item: 7, producto: "Fanta", tipo: "bebida", precio: 2.5}];*/


//                  Función para añadir producto
/*function AddProduct (item, qty){
    
    let unitario = document.querySelector("#unit");
    let fullprice = document.querySelector("#total");

    if(item <= 0){
        alert("Seleccione un producto");
        unitario.innerHTML = `Valor unitario:`
        fullprice.innerHTML = `Valor total:`
    }else{
        let item_actual = items.indexOf(item);
        let producto_actual = productos[item_actual];
        let tipo_actual = tipos[item_actual]
        pay=precios[item_actual];

        resumen_product.push(producto_actual);
        resumen_type.push(tipo_actual);
        resumen_price.push(pay);
        resumen_qty.push(qty);        

        unitario.innerHTML = `Valor unitario: <strong>USD ${pay}</strong>`
        fullprice.innerHTML = `Valor total: <strong>USD ${pay*qty}</strong>`
    }
}*/

/*function AdquirirDatos(){
    prod = parseInt(document.querySelector("#item").value);
    cantidad = parseInt(document.querySelector("#Qty").value);
    AddProduct(prod, cantidad);
}*/

//                  Creación de arrays de cada característica de los objetos
for(const catalogo of menu){
    items.push(catalogo.item);
    productos.push(catalogo.producto);
    tipos.push(catalogo.tipo);
    precios.push(catalogo.precio);
}

/*function Evento_boton(tag, op){
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
}*/

/*boton_SanPlus.addEventListener("click",()=>{
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
})*/

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

/*botonEnd.onclick = () => {
    let contenedor = document.createElement("div");

    contenedor.innerHTML    =   `<h2>Factura de venta</h2>`;

    document.body.append(contenedor);

    for(i=0; i<resumen_type.length; i++){
        let contenedor = document.createElement("div");
        contenedor.innerHTML    =   `<p>Ítem ${i+1}: <strong>${resumen_product[i]}</strong></p>
                                     <p>Cantidad: ${resumen_qty[i]}</p>
                                     <p>Valor unitario: USD ${resumen_price[i]}</p>
                                     <p>Valor total: USD ${resumen_qty[i]*resumen_price[i]}</p>`;
        document.body.append(contenedor);
    }

    for(let i=0; i<resumen_product.length; i++){
        console.log(resumen_product[i]+" cantidad: "+resumen_qty[i]);
        cantidad_total=suma(cantidad_total,resumen_qty[i]);
        subto=suma(subto,multi(resumen_price[i],resumen_qty[i]));
        cuenta_tax=taxes(subto);
    }

    contenedor.innerHTML    =   `<h3>Subtotal: USD ${subto}</h3>
                                 <h4>IVA: USD ${cuenta_tax}</h4>
                                 <p>Total: USD ${subto+cuenta_tax}</p>`;
    
    document.body.append(contenedor);
}*/