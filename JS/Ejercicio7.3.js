const diaActual = new Date;
console.log("La fecha de hoy es: " + diaActual);

const diaNacimiento = new Date(2000, 5, 1);
console.log("La fecha de nacimiento es: " + diaNacimiento);

let diferencia = diaActual > diaNacimiento;
console.log("¿Es mas tarde? ", diferencia);

let dia = diaNacimiento.getDate();
console.log("Mi dia de nacimiento es: ", dia)

let mes = diaNacimiento.getMonth();
console.log("Mi mes de nacimiento es: ", mes+1);

let anio = diaNacimiento.getFullYear();
console.log("Mi año de nacimiento es: ", anio);
