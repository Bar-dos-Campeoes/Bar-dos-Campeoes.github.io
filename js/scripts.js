document.addEventListener("DOMContentLoaded", () => {

  // ================
  // Função base
  // ================
  function animarLetrasGenerico(elementId, indices) {
      const titulo = document.getElementById(elementId);
      if (!titulo) return;

      const texto = titulo.textContent; // mantém espaços
      titulo.textContent = "";

      const letras = texto.split("").map((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char; // mantém espaço visível
          titulo.appendChild(span);
          return span;
      });

      let toggle = true;

      function animar() {
          indices.forEach((i, idx) => {
              setTimeout(() => {
                  if (letras[i]) letras[i].style.opacity = toggle ? "0" : "1";
              }, idx * 200);
          });
          toggle = !toggle;
      }

      animar();
      setInterval(animar, 2000);
  }

  // ===========================
  // Função para Entradas
  // ===========================
  function animarEntradas() {
      animarLetrasGenerico("entradas", [0, 1, 2]);
  }

  // ===========================
  // Função para Prato Principal
  // ===========================
  function animarPrincipal() {
      const principal = document.getElementById("principal");
      if (!principal) return;

      const texto = principal.textContent;
      const len = texto.length;
      const meio = Math.floor(len / 2);

      const indices = [
          meio - 3, meio - 2, meio - 1,
          meio,
          meio + 1, meio + 2
      ];

      animarLetrasGenerico("principal", indices);
  }

  // ===========================
  // Função para Sobremesa
  // ===========================
  function animarSobremesa() {
      const sobremesa = document.getElementById("sobremesa");
      if (!sobremesa) return;

      const texto = sobremesa.textContent;
      const len = texto.length;

      const indices = [len - 4, len - 3, len - 2, len - 1];

      animarLetrasGenerico("sobremesa", indices);
  }

  // ===========================
  // Inicializar todas
  // ===========================
  animarEntradas();
  animarPrincipal();
  animarSobremesa();

});

  
  function animarBebida() {
    const titulo = document.getElementById("bebida");
    if (!titulo) return;
  
    const texto = titulo.textContent.trim();
    titulo.textContent = "";
  
    const letras = texto.split("").map((letra) => {
      const span = document.createElement("span");
      span.textContent = letra;
      titulo.appendChild(span);
      return span;
    });
  
    let toggle = true;
  
    function animar() {
      letras.forEach((span, index) => {
        setTimeout(() => {
          if (toggle) {
            span.classList.add("slide-down");
          } else {
            span.classList.remove("slide-down");
          }
        }, index * 120);
      });
      toggle = !toggle;
    }
  
    animar();
    setInterval(animar, 2000);
  }
  
  animarBebida();

// Botão de copiar
function copiarTexto() {
    const texto = document.getElementById("endereco").innerText;

    navigator.clipboard.writeText(texto).then(() => {
        alert("Endereço copiado!");
    });
}