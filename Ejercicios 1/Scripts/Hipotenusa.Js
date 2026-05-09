function Hipo () {
    let CatA = parseFloat(document.getElementById("CatA").value);
    let CatB = parseFloat(document.getElementById("CatB").value);
    const result = Math.sqrt(Math.pow(CatA, 2) + Math.pow(CatB, 2));
    document.getElementById("result").textContent = "El resultado es: " + result;
};