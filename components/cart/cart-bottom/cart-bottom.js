/* TODO: Render items to cart*/
const dishPrice = function (quantity, unitPrice, price) {
  let h1 = document.createElement("h1");
  h1.innerHTML = `${unitPrice} ${(quantity * price * 1000).toFixed(0)}`;
  let p = document.createElement("p");
  let node = document.createTextNode(
    `(Incl. tax 10% = ${unitPrice} ${Number(quantity * price * 100).toFixed(
      0
    )})`
  );
  p.appendChild(node);

  let div = document.createElement("div");
  div.className = "cash";
  div.appendChild(h1);
  div.appendChild(p);

  return div;
};

const dishQuantity = function (quantity, unitPrice, price) {
  const dish = document.getElementById("dish");

  let plus = document.createElement("div");
  plus.className = "plus";
  let hPlus = document.createElement("h1");
  hPlus.innerHTML = "&plus;";
  plus.appendChild(hPlus);

  let minus = document.createElement("div");
  minus.className = "minus";
  let hMinus = document.createElement("h1");
  hMinus.innerHTML = "&minus;";
  minus.appendChild(hMinus);

  let h1 = document.createElement("h1");
  h1.innerText = quantity;

  plus.addEventListener("click", () => {
    quantity++;
    changeDishPrice(h1, quantity, unitPrice, price);
    changeTotalPrice(price, true);
  });
  minus.addEventListener("click", () => {
    quantity--;
    if (!quantity) {
      const temp = traverse(minus, "card-dish");
      dish.removeChild(temp);
    } else changeDishPrice(h1, quantity, unitPrice, price);

    changeTotalPrice(price, false);
  });

  let div = document.createElement("div");
  div.className = "quantity";
  div.appendChild(minus);
  div.appendChild(h1);
  div.appendChild(plus);

  return div;
};

// TODO: Wrap additives, quantity, cash
function dishBottom(unitPrice, price, quantity) {
  let div = document.createElement("div");
  div.className = "dish-bottom";
  div.appendChild(dishQuantity(quantity, unitPrice, price));
  div.appendChild(dishPrice(quantity, unitPrice, price));

  changeTotalPrice(quantity * price, true);
  return div;
}
