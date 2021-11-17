"use strict";

/* TODO: Render Model */
const loadModel = function (item) {
  if (window.innerWidth <= 1024) return;

  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.add("show");

  const modal = document.createElement("div");
  modal.classList = "modal";

  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = `x`;
  closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    modal.remove();
  });

  const title = document.createElement("div");
  title.classList = "modal-title";
  title.innerHTML = `<h1>ADD TO CART</h1>`;
  title.appendChild(closeBtn);

  const content = document.createElement("div");
  content.classList = "modal-content";

  /* Content Item 1 */
  const contentItem_1 = document.createElement("div");
  contentItem_1.classList = "modal-content-item";
  contentItem_1.innerHTML = `<img src="${item.src}"/>`;

  /* Content Item 2 */
  const contentItem_2 = document.createElement("div");
  contentItem_2.classList = "modal-content-item";

  /* Item Detail 1 */
  const itemDetail_1 = document.createElement("div");
  itemDetail_1.classList = "item-row";
  itemDetail_1.innerHTML = `
    <h2>SKU</h2>
    <h2>${item.type}</h2>
    <h2>Unit Price</h2>
  `;

  /* Item Detail 2 */
  const itemDetail_2 = document.createElement("div");
  itemDetail_2.classList = "item-row";
  itemDetail_2.innerHTML = `
    <h2>${item.id}</h2>
    <h2>${item.description}</h2>
    <h2>${item.unitPrice} ${item.price}</h2>
  `;

  /* Item Detail 3 */
  const itemDetail_3 = document.createElement("div");
  itemDetail_3.classList = "item-row";
  itemDetail_3.innerHTML = `<h2>Quantity</h2>`;
  const btnMinus = document.createElement("button");
  btnMinus.style = `
    color: grey;
    border: 1px solid gray;
    margin-right: 1rem;
    font-size: 1.5rem;
  `;
  btnMinus.innerHTML = `
  <i class="fa fa-minus"></i>
  `;
  const quantityNumber = document.createElement("h2");
  quantityNumber.innerText = `1`;
  const btnAdd = document.createElement("button");
  btnAdd.style = `
    color: red;
    border: 1px solid red;
    margin-left: 1rem;
    font-size: 1.5rem;
  `;
  btnAdd.innerHTML = `<i class="fa fa-plus"></i>`;
  btnAdd.addEventListener("click", () => {
    quantityNumber.innerText = `${Number(quantityNumber.innerText) + 1}`;
    [
      ...quantityNumber.parentNode.parentNode.lastChild.children,
    ][0].innerHTML = `
          <i class="fa fa-shopping-cart"></i>
          <p>${item.unitPrice} ${(
      Number(item.price) * Number(quantityNumber.innerText)
    ).toFixed(3)}</p>
    `;
  });
  btnMinus.addEventListener("click", () => {
    if (Number(quantityNumber.innerText) === 1) return;
    quantityNumber.innerText = `${Number(quantityNumber.innerText) - 1}`;
    [
      ...quantityNumber.parentNode.parentNode.lastChild.children,
    ][0].innerHTML = `
          <i class="fa fa-shopping-cart"></i>
          <p>${item.unitPrice} ${(
      Number(item.price) * Number(quantityNumber.innerText)
    ).toFixed(3)}</p>
    `;
  });
  itemDetail_3.appendChild(btnMinus);
  itemDetail_3.appendChild(quantityNumber);
  itemDetail_3.appendChild(btnAdd);

  /* Item Detail 4 */
  const itemDetail_4 = document.createElement("div");
  itemDetail_4.classList = "item-row";
  itemDetail_4.innerHTML = `
    <h2>Protein:</h2>
    <p>What is Lorem ipsum?</p>
  `;

  /* Item Detail 5 */
  const itemDetail_5 = document.createElement("div");
  itemDetail_5.classList = "item-row";
  itemDetail_5.innerHTML = `
    <h2>Additives:</h2>
    <p>03</p>
  `;

  /* Item Detail 6 */
  const itemDetail_6 = document.createElement("div");
  itemDetail_6.classList = "item-row";
  itemDetail_6.innerHTML = `
    <h2>Baking material:</h2>
    <p>040</p>
  `;

  /* Item Detail 7 */
  const itemDetail_7 = document.createElement("div");
  itemDetail_7.classList = "item-row";
  itemDetail_7.innerHTML = `
    <h2>Food decoration:</h2>
    <p>04</p>
  `;

  /* Item Detail 8 */
  const itemDetail_8 = document.createElement("div");
  itemDetail_8.classList = "item-row";
  itemDetail_8.innerHTML = `
    <h2>Side dishes (*)</h2>
    <p>Select quantity 0</p>
  `;

  /* Item Detail 9 */
  const itemDetail_9 = document.createElement("div");
  itemDetail_9.classList = "item-row";
  itemDetail_9.innerHTML = `
    <p>Please select on the properties below</p>
  `;

  /* Item Detail 10 */
  const itemDetail_10 = document.createElement("div");
  itemDetail_10.classList = "item-row";
  itemDetail_10.innerHTML = `
    <input type="checkbox">
    <p>Vegetables</p>
  `;

  /* Item Detail 11 */
  const itemDetail_11 = document.createElement("div");
  itemDetail_11.classList = "item-row";
  const btnCart = document.createElement("button");
  btnCart.innerHTML = `          
    <i class="fa fa-shopping-cart"></i>
    <p>${item.unitPrice} ${item.price}</p>
  `;
  btnCart.addEventListener("click", () => {
    // TODO: Add Food to Cart
    const outer = document.getElementById("dish");
    outer.appendChild(dish(item, Number(quantityNumber.innerText)));
    modalContainer.classList.remove("show");
    modal.remove();
  });
  itemDetail_11.appendChild(btnCart);

  /* Content Item */
  contentItem_2.appendChild(itemDetail_1);
  contentItem_2.appendChild(itemDetail_2);
  contentItem_2.appendChild(itemDetail_3);
  contentItem_2.appendChild(itemDetail_4);
  contentItem_2.appendChild(itemDetail_5);
  contentItem_2.appendChild(itemDetail_6);
  contentItem_2.appendChild(itemDetail_7);
  contentItem_2.appendChild(itemDetail_8);
  contentItem_2.appendChild(itemDetail_9);
  contentItem_2.appendChild(itemDetail_10);
  contentItem_2.appendChild(itemDetail_11);

  /* Content */
  content.appendChild(contentItem_1);
  content.appendChild(contentItem_2);

  /* Modal */
  modal.appendChild(title);
  modal.appendChild(content);

  /* Modal Container */
  modalContainer.appendChild(modal);
};
