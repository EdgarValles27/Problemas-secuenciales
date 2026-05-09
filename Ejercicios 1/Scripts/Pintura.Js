function Presupuesto () {
    let Metros = parseFloat(document.getElementById("Metros").value);
    let Precio = parseFloat(document.getElementById("Precio").value);
    const result = Metros * Precio;
    document.getElementById("result").textContent = "El resultado es: " + result;
};