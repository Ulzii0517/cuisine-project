import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";

let search = new Search("pasta");

search.doSearch().then((r) => console.log(r));

//Web app tuluv
//-Search query, ur dun
//-Tuhain uzuulj bga jor
//-like-lsn joruud
//-zahialj bga joriin recipes

const state = {};
const controlSearch = async () => {
  // 1) Webees hailtiin tulhuur ugiig gargaj avna.
  const query = searchView.getInput();

  if (query) {
    // 2) shineer hailtiin objectiig uusgej ugnu.
    state.search = new Search(query);
    // 3) Hailt hiihed zoriulj delgetsiig UI beltgene.
    searchView.clearSearchKey();
    searchView.clearSearchResult();
    ////loading/////
    renderLoader(elements.searchResDiv);
    // 4) Hailtiig guitsetgene.
    await state.search.doSearch();
    // 5) Hailtiin ur dung delgetsend uzuulne.
    clearLoader();
    if (state.search.result === undefined)
      alert("Sorry, search result not found");
    else searchView.renderRecipes(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
v;
