const nombre = "Matias";
const apellido = 'Santillan';
let estudiante = "";

// let estudiante = nombre + " " + apellido;
// let estudiante = `${nombre} ${apellido}`;
// estudiante = estudiante.concat(nombre, " ", apellido);
estudiante = estudiante.concat(`${nombre}`, " ", `${apellido}`);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase()

let numLetras = estudiante.length;

let priLetraNombre = nombre.charAt(0);
let ultLetraApellido = apellido.slice(apellido.length-1);

let sinEspacios = estudiante.replace(" ", "");

let incluida = estudiante.includes(nombre);

console.log("Nombre completo del estudiante: ", estudiante);
console.log("Nombre completo del estudiante en mayusculas: ", estudianteMayus);
console.log("Nombre completo del estudiante en minusculas: ", estudianteMinus);
console.log("Cantidad de letras que tiene el nombre completo del estudiante: ", numLetras)
console.log("La primer letra del nombre es: ", priLetraNombre);
console.log("La primer letra del apellido es: ", ultLetraApellido);
console.log("Nombre completo sin espacios: ", sinEspacios);
console.log("¿Esta el nombre en el nombre completo?", incluida)