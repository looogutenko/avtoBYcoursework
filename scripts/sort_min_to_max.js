document.querySelector('.sorting__price_min_to_max').addEventListener("click", () => {
    const elements = document.querySelectorAll('.ad');
    const sorted = [...elements].sort((a, b) => {
      const priceElA = a.querySelector(".price");
      const priceElB = b.querySelector(".price");
      const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
      return getPrice(priceElA) - getPrice(priceElB);
    });
    const resultEl = document.querySelector(".ads");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
  });