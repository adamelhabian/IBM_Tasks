const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

let breakfastMenuItemsHTML = breakfastMenu.map(
  (item, index) => `<p> Item Num ${index + 1} : ${item}</p>`,
);

document.getElementById("breakfastTotalItems").innerHTML =
  breakfastMenuItemsHTML;

let maincourseTotalItems = "";
mainCourseMenu.forEach(function (item, index) {
  maincourseTotalItems += `<p>Item Num ${index + 1}: ${item}</p>`;
});

document.getElementById("maincourseTotalItems").innerHTML =
  maincourseTotalItems;

let dessertMenuItems = "";

for (let i = 0; i < dessertMenu.length; i++) {
  dessertMenuItems += `<p>Item Num ${i + 1}: ${dessertMenu[i]}</p>`;
}

document.getElementById("dessertTotalItems").innerHTML = dessertMenuItems;
