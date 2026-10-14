"use strict";
// O desenho usa coordenadas internas estáveis, independentes do CSS.
const canvas = document.querySelector("#arte");
function desenhar() {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const n = Number(document.querySelector("#pontos").value);
  document.querySelector("#quantidade").textContent = n;
  canvas.setAttribute("aria-label", `Composição circular com ${n} pontos conectados`);
  ctx.clearRect(0, 0, 600, 400);
  const pontos = Array.from({ length: n }, (_, i) => ({x:300 + 150 * Math.cos(i * 2 * Math.PI / n), y:200 + 150 * Math.sin(i * 2 * Math.PI / n)}));
  ctx.strokeStyle = "#64803d"; ctx.lineWidth = 1.5;
  pontos.forEach((a,i) => pontos.slice(i+1).forEach(b => {ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}));
  pontos.forEach(a => {ctx.beginPath();ctx.arc(a.x,a.y,7,0,Math.PI*2);ctx.fillStyle="#42651e";ctx.fill();});
}
if (canvas) { document.querySelector("#pontos").addEventListener("input", desenhar); desenhar(); }

// Apenas a preferência visual é persistida. O site continua funcionando sem armazenamento.
const themeButton = document.querySelector(".theme");
const THEME_KEY = "portfolio-jk-tema";
function aplicarTema(tema) {
  const escuro = tema === "dark";
  document.documentElement.dataset.theme = escuro ? "dark" : "light";
  if (themeButton) { themeButton.textContent = escuro ? "Tema claro" : "Tema escuro"; themeButton.setAttribute("aria-pressed", String(escuro)); }
}
let salvo;
try { salvo = localStorage.getItem(THEME_KEY); } catch (_) { /* Armazenamento indisponível: usar tema padrão. */ }
aplicarTema(salvo === "dark" ? "dark" : "light");
if (themeButton) themeButton.addEventListener("click", () => {
  const tema = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  aplicarTema(tema);
  try { localStorage.setItem(THEME_KEY, tema); } catch (_) { themeButton.title = "A preferência não pôde ser salva neste navegador."; }
});
const form = document.querySelector("#contato");
if (form) {
  const feedback = document.querySelector("#feedback");
  form.addEventListener("invalid", () => { feedback.textContent = "Confira os campos obrigatórios e o formato do e-mail."; }, true);
  form.addEventListener("input", () => { feedback.textContent = ""; });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
    if (nome.length < 2 || mensagem.length < 10) { feedback.textContent = "Informe um nome com pelo menos 2 caracteres e uma mensagem com 10 caracteres, sem contar espaços nas extremidades."; return; }
    feedback.textContent = `Obrigado, ${nome}! Os campos foram validados. Esta é uma demonstração: nenhuma mensagem foi enviada ou armazenada.`;
  });
  form.addEventListener("reset", () => { feedback.textContent = "Formulário limpo."; });
}
