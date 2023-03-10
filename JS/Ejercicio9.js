const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const miFuncion = val =>{
  if(typeof val == "number") {
      return val*2;
  }
  throw new Error("El valor debe ser de tipo número");
}
// const elDoble = miFuncion("a1a");

const numero = "asd"
try {
  // Codigo que puede fallar
  console.log("Esta ejecutando de manera correcta")
  const doble = miFuncion(numero)
  console.log(doble);
} catch(e) {
  // En caso de que falle, ejecuta esto
  logger.error("ERROR!")
} finally {
  console.log("Esto se ejecuta si o si")
}