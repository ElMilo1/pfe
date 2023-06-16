var registro = ()=>{
    let ePNombre = document.getElementById("pnombre");
    let eApellidos = document.getElementById("apellidos");
    let eCorreo = document.getElementById("correo");
    let eFechaN = document.getElementById("fechan");
    let eSexo = document.getElementsByName("sexo");
    let eMan = document.getElementById("man");
    let eWoman = document.getElementById("woman");
    let eOther = document.getElementById("other");

    let pnombre = ePNombre.value;
    let apellidos = eApellidos.value;
    let correo = eCorreo.value;
    let sexo = eSexo.value;
    let man = eMan.value;
    let woman = eWoman.value;
    let other = eOther.value;
    let usuario = {"nombre":pnombre,"apellidos":apellidos,"correo":correo,"sexo":sexo,};
    console.log(usuario)
}
var manejoContraste = ()=>{
    let ebtnContraste = document.getElementById("btnContraste")
    let contraste = ebtnContraste.value;
    if (contraste=="c"){
        ebtnContraste.value="o";
        let elements = document.getElementsByClassName("blanco");
        elements[0].classList.add("negro");
        elements[0].classList.remove("blanco");
    }
    else if (contraste=="o"){
        ebtnContraste.value="c";
        let elements = document.getElementsByClassName("negro");
        elements[0].classList.add("blanco");
        elements[0].classList.remove("negro");
    }
}
var sizeFuente = ()=>{
    alert(fuente)
    let ebtnFuente = document.getElementById("btnFuente");
    let fuente = ebtnFuente.value;
    if (fuente=="0"){
        ebtnFuente="1"
        let elements = document.getElementsByClassName("small");
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            element[0].classList.add("medium");
            element[0].classList.remove("small");
            
        }
    }
    else if(fuente=="1"){
        ebtnFuente="2"
        let elements = document.getElementsByClassName("medium");
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            element[0].classList.add("large");
            element[0].classList.remove("medium");
            
        }
}
else if(fuente=="2"){
    ebtnFuente="0"
    let elements = document.getElementsByClassName("large");
    for (let index = 0; index <elements.length; index++) {
        const element = elements[index];
        element[0].classList.add("small");
        element[0].classList.remove("large");
        
    }
}
}
document.getElementById("BtnRegistro").addEventListener("click",registro)
document.getElementById("btnContraste").addEventListener("click",manejoContraste)
document.getElementById("btnFuente").addEventListener("click",sizeFuente)