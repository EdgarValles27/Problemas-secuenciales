function Metrocubico(){
    let MetrosCu = parseFloat(document.getElementById("MetrosCu").value);
    let PrecioMcu = parseFloat(document.getElementById("PrecioMcu").value);
    let total = MetrosCu * PrecioMcu;
    document.getElementById("result").textContent =
    "Total a pagar: $" + total;
}