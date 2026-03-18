function obterValores() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

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

    return { n1, n2 };
}

function mostrarResultado(msg) {
    document.getElementById("resultado").innerText = "Resultado: " + msg;
}

function somar() {
    const valores = obterValores();
    if (!valores) return;

    mostrarResultado(valores.n1 + valores.n2);
}

function subtrair() {
    const valores = obterValores();
    if (!valores) return;

    mostrarResultado(valores.n1 - valores.n2);
}

function multiplicar() {
    const valores = obterValores();
    if (!valores) return;

    mostrarResultado(valores.n1 * valores.n2);
}

function dividir() {
    const valores = obterValores();
    if (!valores) return;

    if (valores.n2 === 0) {
        mostrarResultado("Erro: divisão por zero!");
        return;
    }

    mostrarResultado(valores.n1 / valores.n2);
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    mostrarResultado("");
}