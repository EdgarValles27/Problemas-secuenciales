function Distancia () {
    let Km = parseFloat(document.getElementById("Km").value);
    let PrecioKm = parseFloat(document.getElementById("PrecioKm").value);
    const result = Km * PrecioKm;
    document.getElementById("result").textContent = "El resultado es: " + result;
};