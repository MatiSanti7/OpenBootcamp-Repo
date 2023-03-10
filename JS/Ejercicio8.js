//  FUNCION SIMPRE DEVUELVE TRUE

function siempreTrue() {
    return true;
}


// FUNCION QUE DEVUELVE UN ERROR U OTRA COSA
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random()*2);
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})


//  GENERADOR DE INDICE AUTOMATICO
function* generadorIndice() {
    let id = 0;
    while(true){
        id++;
        if (id === 10) {
            return id
        }
        yield id;
    }
}

console.log(siempreTrue());

miPromesa
    .then(setTimeout(()=> {
        console.log("Esta es una promesa");
    }, 5000))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"));


const gen = generadorIndice();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);