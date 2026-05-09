function Tiempo () {
    let Velocidad = parseFloat(document.getElementById("Velocidad").value);
    let Distancia = parseFloat(document.getElementById("Distancia").value);
    const result = Distancia / Velocidad;
    document.getElementById("result").textContent = "El resultado es: " + result;
};