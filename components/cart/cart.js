// TODO: Wrap all the element of the right hand of the card
function dishWrapper(index, item, quantity) {
  const dishBottomWrapper = document.createElement("div");
  dishBottomWrapper.className = "dish-bottom-wrapper";
  // TODO: Pass argument to additives
  const add = additives();
  dishBottomWrapper.appendChild(add);
  dishBottomWrapper.appendChild(
    dishBottom(item.unitPrice, Number(item.price), quantity)
  );

  const dishTopWrapper = document.createElement("div");
  dishTopWrapper.className = "dish-top-wrapper";

  const h2 = document.createElement("h2");
  h2.innerHTML = `<span style="color:red">${index}.</span>` + item.description;

  const i = document.createElement("i");
  i.className = "fas fa-angle-left card-arrow";
  let addi = add.children;
  let j = 0;
  let length = addi.length;
  let toggle = false;
  i.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      i.style.transform = "rotate(-90deg)";
      for (j = 0; j < length; j++) {
        addi[j].style.height = "14px";
        addi[j].style.opacity = 1;
      }
    } else {
      i.style.transform = "rotate(0deg)";
      for (j = 0; j < length; j++) {
        addi[j].style.height = "0px";
        addi[j].style.opacity = 0;
      }
    }
  });

  dishTopWrapper.appendChild(h2);
  dishTopWrapper.appendChild(i);

  const dishWrapper = document.createElement("div");
  dishWrapper.className = "dish-wrapper";
  dishWrapper.appendChild(dishTopWrapper);
  dishWrapper.appendChild(dishBottomWrapper);

  return dishWrapper;
}

const dish = function (item, quantity) {
  const cardDish = document.createElement("div");
  cardDish.className = "card-dish";
  cardDish.innerHTML = `
    <div class="div-img">
      <img src=${item.src} alt=${item.description} />
    </div>
  `;
  cardDish.appendChild(dishWrapper(1, item, quantity));

  return cardDish;
};
