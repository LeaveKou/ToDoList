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

    if (contenido1 !== "" && contenido1 !== null && contenido1.length <= 22 && contenido2 !== "null") { //verificador
        const li = document.createElement("li");
        li.classList.add('container-li');
        const p = document.createElement("p");
        p.classList.add('texto');
        const p2 = document.createElement("p");
        p.textContent = contenido1;
        p2.textContent = contenido2;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(AgregarBotonDeBorrar()); //
        ul.appendChild(li);

        input.value = "";
    }
    else {
        if (contenido1.length > 22) alert("Se exedio el limite de caracteres");
        else alert("Hay valores vacios")//Mensaje que sale cuando ponen valores vacios en el formulario
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
