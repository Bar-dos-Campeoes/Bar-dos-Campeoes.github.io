
// Botão de copiar
function copiarTexto() {
  const texto = document.getElementById("endereco").innerText;

  navigator.clipboard.writeText(texto).then(() => {
      alert("Endereço copiado!");
  });
}


function scrollToMenu() {
  // Aqui você deve colocar o id do seu menu completo
  const menu = document.getElementById("btn-ementa");
  if(menu) {
    menu.scrollIntoView({ behavior: "smooth" });
  }
}