!function(){var e=refs={dino:document.getElementById("dino"),cactus:document.getElementById("cactus"),spaseBtn:document.getElementById("spase"),startBtn:document.getElementById("start"),value:document.getElementById("value"),bestValue:document.getElementById("bestValue")},t=document.getElementById("scene");new Parallax(t),t=document.getElementById("scene1"),new Parallax(scene1);e.spaseBtn.addEventListener("click",(function(){"jump"!=e.dino.classList&&e.dino.classList.add("jump");setTimeout((function(){e.dino.classList.remove("jump")}),300)})),e.startBtn.addEventListener("click",(function(){e.cactus.classList.add("cactusMov"),e.spaseBtn.disabled=!1,t=setInterval((function(){a>15&&(e.cactus.classList.remove("cactusMov"),e.cactus.classList.add("cactusSpeed")),a>35&&(e.cactus.classList.remove("cactusSpeed"),e.cactus.classList.add("cactusSpeedTwo")),s&&clearInterval(t)}),1e3);var t}));var s=!1,a=e.value.textContent=null,c="currentScore";setInterval((function(){var t,n=parseInt(window.getComputedStyle(dino).getPropertyValue("top")),l=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));l<=1&&(a=e.value.textContent++,localStorage.setItem(c,a)),l<50&&l>0&&n>=140&&(s=!0,e.cactus.classList.remove("cactusMov"),e.cactus.classList.remove("cactusSpeed"),e.cactus.classList.remove("cactusSpeedTwo"),e.spaseBtn.disabled=!0,e.value.textContent=null,alert("Game Over"),t=localStorage.getItem(c),e.bestValue.textContent=t)}),10)}();
//# sourceMappingURL=index.c1543263.js.map