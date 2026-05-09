function Edad(){
    let Nacimiento = parseInt(document.getElementById("Nacimiento").value);
    let edad = 2026 - Nacimiento;
    document.getElementById("result").textContent =
    "La edad de la persona es: " + edad + " años";
}