function Costo () {
    let Tiempo = parseFloat(document.getElementById("Tiempo").value);
    let CostoMin = parseFloat(document.getElementById("CostoMin").value);
    const result = Tiempo * CostoMin;
    document.getElementById("result").textContent = "El resultado es: " + result;
};