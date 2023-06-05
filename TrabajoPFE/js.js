var registro = ()=>{
    let ePNombre = document.getElementById("pnombre");
    let eApellidos = document.getElementById("apellidos");
    let eCorreo = document.getElementById("correo");
    let eFechaN = document.getElementById("fechan");
    let eSexo = document.getElementsByName("sexo");
    let eMan = document.getElementById("man");
    let eWoman = document.getElementById("woman");
    let eOther = document.getElementById("other");
    if (eMan == true){
        let eSexo = "Masculino"
    }
    if (eWoman == true){
        let eSexo = "Femenino"
    }
    if (eOther == true){
        let eSexo = "Otro"
    }
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
document.getElementById("BtnRegistro").addEventListener("click",registro)