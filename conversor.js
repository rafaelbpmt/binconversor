function conversor() {
    const input = document.getElementById("decimal-input");
    let numero = parseInt(input.value);

    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido.";
        return;
    }

    let resultado = "";

    while (numero > 0) {
        let resto = numero % 2;
        resultado = resto + resultado;
        numero = Math.floor(numero / 2);
    }

    // Exibir o resultado na div
    document.getElementById("resultado").innerHTML = 
  'Resultado: <strong>' + (resultado || "0") + '</strong>';
}

// Evitar que o form recarregue a página
document.getElementById("converter-form").addEventListener("submit", function (event) {
    event.preventDefault();
    conversor();
});
