let alturaMm = 2508;
let pesoG = 4826;

let alturaCm = alturaMm/10;
let alturaM = alturaMm/1000;
let pesoKg = pesoG/1000;
let redAlturaM = Math.round(alturaM);
let redPesoKg = Math.round(pesoKg)-1;
let maxValorJs = (((2**1023)+1) == (2**1023));

console.log("La altura en centimetros es: ", alturaCm)
console.log("La altura en metros es: ", alturaM)
console.log("El peso en kilogramos es: ", pesoKg)
console.log("Redondeo de la altura en metros hacia arriba: ", redAlturaM )
console.log("Redondeo del peso en kilogramos hacia abajo: ", redPesoKg )
console.log("¿'El maximo valor que se puede obtener en Javascript +1' es igual a 'El maximo valor que se puede obtener en Javascript'? ", maxValorJs)