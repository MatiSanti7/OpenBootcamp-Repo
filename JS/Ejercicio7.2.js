const objeto = [
    {
        nombre: "Matias", apellido: "Santillan", edad:22, altura: 1.80 , soyDesarrollador: true
    }
];

let varEdad = objeto.map(persona => persona.edad);
console.log("Esta es la edad: " + varEdad);

const objeto2 = [
    {
        nombre: "wqe", apellido: "asd", edad:20, altura: 1.75 , soyDesarrollador: false
    },
    {
        nombre: "zxc", apellido: "cvb", edad:25, altura: 1.71 , soyDesarrollador: true
    }
];

const lista = [...objeto, ...objeto2];
console.log(lista)

const listaOrdenado = lista.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenado);