const additivesElement = function (item) {
  let p = document.createElement("p");
  p.innerText = item;

  return p;
};

const additivesCash = function (cost) {
  let p = document.createElement("p");
  p.innerText = cost;
  p.style.marginRight = "10px";

  return p;
};

const additives = function (
  items = [
    "Đồ ăn kèm: Rau thơm",
    "Đồ chấm: Sốt cay, muối ớt",
    "Đồ nhậu kèm: Tảo xanh",
  ],
  cost = ["VNĐ 5.50", "VNĐ 2.00", "VNĐ 2.00"]
) {
  let wrapper = document.createElement("div");
  wrapper.className = "additives-wrapper";

  items.forEach((item, index) => {
    let div = document.createElement("div");
    div.className = "additives";
    div.appendChild(additivesElement(item));
    div.appendChild(additivesCash(cost[index]));
    wrapper.appendChild(div);
  });

  return wrapper;
};