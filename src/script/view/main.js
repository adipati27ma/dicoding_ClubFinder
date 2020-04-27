import "../component/search-bar.js";
import "../component/club-list.js";
import DataSource from "../data/data-source.js";


const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("club-list");


  //! cara 1 (btn search on click, then/catch)
  const onButtonSearchClicked = () => {
    DataSource.searchClub(searchElement.value)
      .then(renderResult) // bisa gini
      .catch(r => fallbackResult(r)); // bisa gini
  };
  searchElement.clickEvent = onButtonSearchClicked;

  //! cara 2 (on enter, async)
  const onKeyInSearchPressed = async (e) => {
    if (e.keyCode === 13) {
      try {
        const result = await DataSource.searchClub(searchElement.value)
        renderResult(result);
      } catch (err) {
        fallbackResult(err);
      }
    }
  };
  searchElement.keyEvent = onKeyInSearchPressed;


  const renderResult = results => clubListElement.clubs = results;


  const fallbackResult = message => clubListElement.renderError(message);
};


export default main;