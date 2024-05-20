function RepeatHello (callback) {
    const stopInterval = setInterval(callback, 1000);

    setTimeout(() => clearInterval(stopInterval), 5000);
}

RepeatHello (() => console.log("Hello"));

//Usar arrow functions hace el código más corto y más legible para nuestra máquina
