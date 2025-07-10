import { elements } from "./base";

//////private function/////////////////////
const renderRecipe = (recipe) => {
  console.log(recipe);

  const markup = `
    <li>  
        <a class="results__link " href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>            
`;

  /////ul ruugee nemne/////////////
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
///////////////////////////////////////

export const clearSearchKey = () => {
  elements.searchInput.value = "";
};

export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
  elements.pageButtons.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;

export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
  ///////////Hailtiin ur dung huudaslaj uzuuleh//////////////
  ///page = 2, start =10, end=20
  const start = (currentPage - 1) * resPerPage;
  const end = currentPage * resPerPage;

  recipes.slice(start, end).forEach(renderRecipe);

  /////huudaslaltiin button-g gargaj ireh////////////////

  const totalPages = Math.ceil(recipes.length / resPerPage);
  renderButtons(currentPage, totalPages);
};
/////huudasnii too, next prev bolgoh, haashaa yvj bga chiglel zaah////
const creatButton = (page, type, direction) => `
   <button class="btn-inline results__btn--${type} " data-goto=${page}>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${direction}"></use>
                    </svg>
                    <span>Хуудас ${page}</span>
                </button>
`;

//////
const renderButtons = (currentPage, totalPages) => {
  let buttonHtml;

  if (currentPage === 1 && totalPages > 1) {
    //1-r huudsan deer bn, 2-r huudas gedeg button-g garga
    buttonHtml = creatButton(2, "next", "right");
  } else if (currentPage < totalPages) {
    //umnuh bolon daraagiin huudas ruu shiljih button-g uzuul
    buttonHtml = creatButton(currentPage - 1, "prev", "left");
    buttonHtml += creatButton(currentPage + 1, "next", "right");
  } else if (currentPage === totalPages) {
    //hamgiin suuliin huudas deer bn. Umnuh ruu shiljuuleh button-g uzuulne
    buttonHtml = creatButton(currentPage - 1, "prev", "left");
  }

  elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHtml);
};
