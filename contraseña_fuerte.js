var contraseña=prompt("Escriba su nueva contraseña");

if (contraseña.length>=8 && contraseña.includes("*")){
    alert("Contraseña valida")
}else{
    alert("La contraseña no es lo suficientemente segura")
}