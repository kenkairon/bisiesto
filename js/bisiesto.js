let anio = prompt('ingrese un año');
if(anio == null){
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger">Presiono Cancelar Ingrese un dato Por favor<h4/>`;
}else if(anio <= 0){
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger">No se puede realizar operación adicional alguna. <h4/>`;
}else if(anio == ""){
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger">No se Permiten Campos Vacíos<h4/>`;
}else if ((anio%4==0) && (anio%100 !=0 || anio % 400 ==0)) {
    document.getElementById('content').innerHTML = `<h4 class="alert alert-success">El año ${anio} “es biciesto”<h4/>`;
}else{
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger" >El año ${anio} No es Biciesto<h4/>`;
}
