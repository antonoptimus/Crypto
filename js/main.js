const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header");
const logo = document.querySelector(".header-logo");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header--mobile");
  document.body.classList.toggle("no-scroll");
  logo.classList.toggle("none");
};

document.addEventListener("DOMContentLoaded", function () {
  const calcHeadInput = document.querySelector(".calc-head__input");
  const calcHeadSelect = document.querySelector(".calc-head__select");
  const calcFootTotal = document.querySelector(".calc-foot__total");
  const calcHeadBtn = document.querySelector(".calc-head__btn");

  calcHeadBtn.addEventListener("click", function () {
    const inputValue = parseFloat(calcHeadInput.value);3434
    const selectValue = calcHeadSelect.value;

    if (!isNaN(inputValue)) {
      let coefficient = 1;

      switch (selectValue) {
        case "th":
          coefficient = 0.02; 
          break;
        case "ph":
          coefficient = 0.07; 
          break;
        case "eh":
          coefficient = 0.03; 
          break;
        default:
          break;
      }

      const revenue = inputValue * coefficient;
      const ethPrice = 275; // Пример текущей цены эфира
      const totalRevenueEth = revenue / ethPrice; // Пересчитываем прибыль в эфирах
      const totalUsd = totalRevenueEth * 2.911; // Пересчитываем прибыль в доллараъ

      calcFootTotal.textContent = `${totalRevenueEth.toFixed(8)} ETH ($${totalUsd.toFixed(8)})`;
    } else {
      calcFootTotal.textContent = "Please enter a number";
    }
  });
});
