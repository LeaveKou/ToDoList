const input = document.querySelector("input");
const botonagregar = document.querySelector(".boton-agregar");                
const ul = document.querySelector("ul");                       
const $select = document.querySelector(".cantidad-form");        //query selector agarra valores del html 

botonagregar.addEventListener("click", (e) => {
    e.preventDefault(); //evita que la pag haga reset
    const contenido1 = input.value; //agarra el contenido del input del formulario

    const indice = $select.selectedIndex; //agarra el contenido del select del formulario
    const opcionSeleccionada = $select.options[indice];
    const contenido2 = opcionSeleccionada.value;

    if (contenido1 !== "" && contenido1 !== null && contenido2 !== "null") { //verificador
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = contenido1 + " / " + contenido2;       // !!!!!!!!!!!!!!!!!! Contenido1 + " / " +  Contenido2 es lo que se muestra cuando
                                                    // !!! Cargan un elemento, ejem,   (   Papas + /  + No Hay ), cambiar si lo quieren hacer mas facha 
        li.appendChild(p);
        li.appendChild(AgregarBotonDeBorrar());  //
        ul.appendChild(li);

        input.value = "";
    }
    else {
        alert("gilipollas tenes valores vacios");     //Mensaje que sale cuando ponen valores vacios en el formulario
    }
});

function AgregarBotonDeBorrar() {                              //esa funcion crea un boton con una x cada vez que se crea un elemento
    const botonborrar = document.createElement("button");

    botonborrar.textContent = "X";
    botonborrar.className = "botonborrar";

    botonborrar.addEventListener("click", (e) => {
        const elemento = e.target.parentElement;
        ul.removeChild(elemento);

        const todoelemento = document.querySelectorAll("li");

    });

    return botonborrar;
}