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
    // console.log(Number(totalPrice[0].innerHTML) - price * 1.1);
    totalPrice[0].innerHTML = Math.abs(
      (Number(totalPrice[0].innerHTML) - price * 1100).toFixed(0)
    );

    totalPrice[1].innerHTML = Math.abs(
      (Number(totalPrice[1].innerHTML) - price * 100).toFixed(0)
    );
  }

  document.getElementById("total-price").value = totalPrice[0].innerHTML;
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

// Update index
let removeQueue = [];
let temp = 0;

const updateIndex = (index) => {
  temp = 0;
  removeQueue.forEach((idx) => {
    if (idx < index) temp++;
  });

  return temp;
};

const updateAllIndex = (removeIdx) => {
  let dishes = document.getElementsByClassName("card-dish");
  while (removeIdx < dishes.length) {
    dishes[removeIdx].querySelector(".index-dish").innerText = removeIdx + 1;
    removeIdx++;
  }
};

// New Section for form
let count = 0;
let form = document.querySelector(".form-data");

const addFoodToForm = ({ description, price }, quantity) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <input type="hidden" name="description[]" value="${description}" />
  <input type="hidden" name="price[]" value="${price}" />
  <input type="hidden" name="quantity[]" value="${quantity}" />
  `;

  form.appendChild(div);
  // console.log(form);
};

const updateFoodToForm = (index, quantity) => {
  // change input quantity value
  form
    .getElementsByTagName("div")
    [index - updateIndex(index)].getElementsByTagName("input")[2].value =
    quantity;
};

const removeFood = (index) => {
  form.removeChild(
    form.getElementsByTagName("div")[index - updateIndex(index)]
  );
  // console.log(form);
};
