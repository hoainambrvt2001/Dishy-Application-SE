"use strict";

const loadFoods = function (foods) {
  const menu = document.querySelector(".menu");
  foods.forEach((food, index) => {
    const foodItem = document.createElement("div");
    foodItem.innerHTML = `
      <div class="food-item-wrapper" id="${food.id}">
        <img src="${food.src}" alt=""/>
        <div class="food-item-content">
          <div class="content-header">
            <h1>${index + 1}.</h1>
            <h1>${food.description}</h1>
          </div>
          <hr />
          <div class="content-payment">
            <p>${food.unitPrice} ${food.price}</p>
            <button>
              <i class="fa fa-shopping-cart"></i>
            </button>
          </div>
          </div>
      </div>
    `;
    foodItem.addEventListener("click", () => loadModel(food));
    menu.appendChild(foodItem);
  });
};

// TODO: Render Foods Items in Default
loadFoods(foodItems[0]);
