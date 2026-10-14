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
