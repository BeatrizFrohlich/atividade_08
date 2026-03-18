function obterValores() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    return { n1, n2 };
}

n1 = parseFloat(n1);
n2 = parseFloat(n2);

if (n1 === "" || n2 === "") {
    alert("Preencha todos os campos!");
    return null;
}

if (isNaN(n1) || isNaN(n2)) {
    alert("Digite apenas números!");
    return;
}

function mostrarResultado(msg) {
    document.getElementById("resultado").innerText = "Resultado: " + msg;
}