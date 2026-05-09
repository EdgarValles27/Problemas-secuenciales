function Tarifa () {
    let Hours = parseFloat(document.getElementById("Hours").value);
    let Tarifah = parseFloat(document.getElementById("Tarifah").value);
    const result = Hours * Tarifah;
    document.getElementById("result").textContent = "El resultado es: " + result;
};