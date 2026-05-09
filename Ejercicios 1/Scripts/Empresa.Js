function Convertir () {
    let Dolarval = parseFloat(document.getElementById("Dolarval").value);
    let Pesosmx = parseFloat(document.getElementById("Pesosmx").value);
    const result = Pesosmx / Dolarval;
    document.getElementById("result").textContent = "El resultado es: " + result;
};