const caixaTexto = document.getElementById("caixaTexto");
const mensagem = document.getElementById("mensagem");

function enviar(palavraSecreta) {
  const segredoCodificado = "eGFkcmV6";
  let palavraDigit = caixaTexto.value.trim().toLowerCase();

  if (btoa(palavraDigit) === segredoCodificado) {
    const divSuccess = document.createElement("div");
    divSuccess.className =
      "victory-screen animate__animated animate__fadeIn d-flex flex-column align-items-center justify-content-center";

    const container = document.createElement("div");
    container.className =
      "bg-light p-5 rounded-4 shadow-lg d-flex flex-column align-items-center text-center";

    const iconSuccess = document.createElement("img");
    iconSuccess.src = "imagens/sucesso.png";
    iconSuccess.style.width = "48px"; // Tamanho comum de ícone (pode ser 32px, 48px ou 64px)
    iconSuccess.style.height = "48px";
    iconSuccess.className = "mb-3";

    const textSuccess = document.createElement("p");
    textSuccess.id = "textSuccess";
    textSuccess.className = "fs-4 text-success fw-bold";
    textSuccess.textContent = "Parabéns! Você desvendou a palavra secreta.";

    container.appendChild(iconSuccess);
    container.appendChild(textSuccess);
    divSuccess.appendChild(container);
    mensagem.replaceChildren(divSuccess);
    // mensagem.innerHTML = `
    // <div class="alert alert-success d-inline-block border-0 shadow-sm d-flex align-items-center" role="alert">
    //         <span class="fs-5">🎉 Parabéns! Você desvendou a palavra secreta.</span>
    //     </div>`;

    mensagem.classList.remove("text-danger");
    // mensagem.classList.add("text-success");
  } else if (palavraDigit.length > 0) {
    // const divFail = document.createElement("div");
    // divFail.className = "bg-light p-3";

    const iconFail = document.createElement("i");
    iconFail.className = "bi bi-x-circle-fill ms-1 me-2";

    const containerFail = document.createElement("div");
    containerFail.className =
      "d-inline-flex align-items-center text-light bg-danger p-1 mb-2 rounded-3 shadow-sm";

    const textFail = document.createElement("span");
    // textFail.id = "textFail";
    textFail.className = " text-light fw-bold me-1";
    textFail.textContent = "Palavra errada. Tente novamente!";

    containerFail.appendChild(iconFail);
    containerFail.appendChild(textFail);
    // divFail.appendChild(textFail);
    mensagem.className = "text-center";
    mensagem.replaceChildren(containerFail);

    // mensagem.innerHTML = `
    //  <div class="alert alert-danger d-inline-block border-0 shadow-sm" role="alert">
    //         ❌ Palavra errada. Tente novamente!
    //     </div>`;

    // mensagem.classList.add("text-danger");

    setTimeout(() => {
      mensagem.textContent = "";
    }, 1500);
  }

  caixaTexto.value = "";
}

// Limpa a mensagem quando o usuário começar a digitar de novo
caixaTexto.addEventListener("input", () => {
  if (caixaTexto.value.trim() === "") {
    mensagem.textContent = "";
  }
});

// ESCUTA A TECLA ENTER NO INPUT
caixaTexto.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita recarregar a página caso esteja dentro de um form
    enviar(); // Dispara a função de validação
  }
});
