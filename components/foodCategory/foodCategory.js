"use strict";

const owlCarousel = document.querySelector(".owl-carousel");

const loadCategoryCard = function (foodCategory) {
  const foodCategoryCard = document.createElement("div");
  foodCategoryCard.innerHTML = `
    <div class="category-card" id="${foodCategory.id}">
      <img src="${foodCategory.image}" />
      <p>${foodCategory.name}</p>
    </div>
  `;
  owlCarousel.appendChild(foodCategoryCard);
};

/* TODO: Event Listener to each Category card */
owlCarousel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList[0] === "category-card") {
    const menu = document.querySelector(".menu");
    while (menu.firstChild) {
      menu.removeChild(menu.firstChild);
    }
    const foodIndex = e.target.parentNode.id - 1;
    loadFoods(foodItems[foodIndex]);
    const currentCategory = document.querySelector(".current-category");
    currentCategory.children[0].textContent = foodCategories[foodIndex].name;
  }
});

// TODO: Render Food Categories in Default:
foodCategories.forEach((foodCategory) => {
  loadCategoryCard(foodCategory);
});
