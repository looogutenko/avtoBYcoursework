document.querySelector('.sorting__price_max_to_min').addEventListener("click", () => {
    const elements = document.querySelectorAll('.ad');
    const sorted = [...elements].sort((a, b) => {
      const priceElA = a.querySelector(".price");
      const priceElB = b.querySelector(".price");
      const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
      return getPrice(priceElB) - getPrice(priceElA);
    });
    const resultEl = document.querySelector(".ads");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
  });