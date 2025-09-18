const loadCategories = () => {
  const url = "https://taxi-kitchen-api.vercel.app/api/v1/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
// Foods card load
const loadFoods = (id) => {
  const url = ` https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoods(data.foods));
};
const lodeRandomData = () => {
  const url = " https://taxi-kitchen-api.vercel.app/api/v1/foods/random";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoods(data.foods));
};
const loadFoodDetails = (id) => {
  const url = ` https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoodDetails(data.details));
};
//Food card Display Show
const displayFoods = (foods) => {
  console.log(foods);
  const foodContainer = document.getElementById("food-container");
  foodContainer.innerHTML = "";
  foods.forEach((food) => {
    const foodCard = document.createElement("div");
    foodCard.innerHTML = `
    <div onclick="loadFoodDetails(${food.id})" class="p-5 bg-white flex gap-3 mt-5 shadow rounded-xl">
            <div class="img flex-1">
              <img
                src="${food.foodImg}"
                alt=""
                class="w-[160px] rounded-xl h-[160px] object-cover"
              />
            </div>
            <div class="flex-2">
              <h1 class="text-xl font-bold">
               ${food.title}
              </h1>

              <div class="badge badge-warning">${food.category}</div>

              <div class="divider divider-end">
                <h2 class="text-yellow-600 font-semibold">
                  $ <span class="price">${food.price}</span> BDT
                </h2>
              </div>

              <button class="btn btn-warning">
                <i class="fa-solid fa-square-plus"></i>
                Add This Item
              </button>
            </div>
          </div>
    `;
    foodContainer.appendChild(foodCard);
  });
};
const displayCategory = (categories) => {
  const cateContainer = document.getElementById("category-container");
  cateContainer.innerHTML = " ";
  for (let cat of categories) {
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = `
     <button onclick="loadFoods(${cat.id})" class="btn btn-block justify-start  shadow btn-category">
            <img
              src="${cat.categoryImg}"
              alt=""
              class="w-10"
            />${cat.categoryName}
          </button>
    `;
    cateContainer.appendChild(categoryCard);
  }
};
const displayFoodDetails = (foodDetails) => {
  console.log(foodDetails);
  const detailContainer = document.getElementById("detail-container");
  detailContainer.innerHTML = `
      <div>
         <h1 class="text-2xl mb-4">${foodDetails.title}</h1>
        <img class="w-full h-[300px] rounded-md mx-auto" src="${foodDetails.foodImg}" alt="">
        <div class="flex justify-around items-center my-5">
        <h1>${foodDetails.category}</h1> 
        <h1>${foodDetails.area}</h1>
        <h1>Price:${foodDetails.price}$</h1>
        </div> 
        <div class="flex justify-center">
        <button class="text-white " ><a target="_blank" class="mx-auto w-11 rounded-lg bg-red-400 px-10 py-2"  href="${foodDetails.video}">video</a></button>
      </div>
      </div>
  `;
  document.getElementById("my_modal_3").showModal();
};
// Call function
loadCategories();
lodeRandomData();
