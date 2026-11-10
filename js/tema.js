"use strict";
// Executado antes do CSS para evitar mostrar o tema errado durante a navegação.
(() => {
  const chave = "portfolio-jk-tema";
  let tema;
  // Em file://, cada arquivo pode ter um armazenamento separado.
  if (location.protocol === "file:") {
    const recebido = new URLSearchParams(location.search).get("tema");
    if (recebido === "light" || recebido === "dark") tema = recebido;
  }
  if (!tema) {
    try { tema = localStorage.getItem(chave); } catch (_) { /* Preferência indisponível. */ }
  }
  tema = tema === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = tema;
  try { localStorage.setItem(chave, tema); } catch (_) { /* Navegação local usa os links. */ }
})();
