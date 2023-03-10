const listaCompra = ["Leche", "Azucar", "Yerba", "Fideo", "Agua mineral"];

const aceite = listaCompra.push("Aceite de Girasol");

const listaPeliculas = [
    { Titulo: "Avengers: EndGame", Director: "Anthony & Joe Russo ", Fecha: new Date(2019, 03, 26) },
    { Titulo: "Top Gun: Maverick", Director: "Joseph Kosinski", Fecha: new Date(2022, 04, 27) },
    { Titulo: "Ford v. Ferrari", Director: "James Mangold", Fecha: new Date(2019, 07, 30) },
    { Titulo: "Batman Begins", Director: "Christopher Nolan", Fecha: new Date(2005, 05, 16) },
    { Titulo: "Iron Man", Director:"Jon Favreau", Fecha: new Date(2008, 03, 30)}
];

const listaPeliFiltrada = listaPeliculas.filter(peli => peli.Fecha > new Date(2010, 05, 1));
const listaDirectores = listaPeliculas.map(peli => "Director: " + peli.Director);
const listaTitulos = listaPeliculas.map(peli => "Titulo: " + peli.Titulo);
const listaDirYTitulos = listaDirectores.concat(listaTitulos);
const listaDirYTitulos2 = [...listaDirectores, ...listaTitulos];

console.log(listaCompra);
console.log(listaPeliFiltrada);
console.log(listaDirectores)
console.log(listaTitulos);
console.log(listaDirYTitulos);
console.log(listaDirYTitulos2);