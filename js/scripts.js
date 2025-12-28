
// Botão de copiar
function copiarTexto() {
  const texto = document.getElementById("endereco").innerText;

  navigator.clipboard.writeText(texto).then(() => {
      alert("Endereço copiado!");
  });
}