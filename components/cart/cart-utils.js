// TODO: Traverse reverse tree
function traverse(html, className, id) {
  if (className) {
    if (html.className === className) return html;
    return traverse(html.parentNode, className, id);
  }
  if (id) {
    if (html.id === id) return html;
    return traverse(html.parentNode, className, id);
  }
}

function changeTotalPrice(price, plus) {
  const totalPrice = document.getElementsByClassName("total-price");
  if (plus) {
    totalPrice[0].innerHTML = (
      Number(totalPrice[0].innerHTML) +
      price * 1100
    ).toFixed(0);

    totalPrice[1].innerHTML = (
      Number(totalPrice[1].innerHTML) +
      price * 100
    ).toFixed(0);
  } else {
    console.log(Number(totalPrice[0].innerHTML) - price * 1.1);
    totalPrice[0].innerHTML = Math.abs(
      (Number(totalPrice[0].innerHTML) - price * 1100).toFixed(0)
    );

    totalPrice[1].innerHTML = Math.abs(
      (Number(totalPrice[1].innerHTML) - price * 100).toFixed(0)
    );
  }
}

function changeDishPrice(h1, quantity, unitPrice, price) {
  h1.innerText = quantity;

  const cash = traverse(h1, "dish-bottom").lastChild;
  cash.firstChild.innerHTML = `${unitPrice} ${(quantity * price).toFixed(3)}`;

  cash.lastChild.innerHTML = `(Incl. tax 10% = ${unitPrice} ${(
    quantity *
    price *
    0.1
  ).toFixed(3)})`;
}
