// Global app controller
import Search from "./Models/Search";
import Id from './Models/Id';
import * as serachView from "./Views/SerachView";
import * as formView from "./Views/FormView";
import * as cartView from './Views/CartView';
import { DOMstrings, renderLoader, clearLoader } from "./Views/base";

//Global stete of the app
const state = {};

const controlSearch = async () => {
  const query = serachView.getInput();

  if (query) {
    state.serach = new Search(query);
    serachView.clearInput();
    serachView.clearResults();
    renderLoader(DOMstrings.resultHead);
    try {
      await state.serach.getProducts();
      clearLoader();
      serachView.renderProduct(state.serach.result);
    } catch (error) {
      alert("Something went wrong with serach...");
    }
  }
};
DOMstrings.submit.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
DOMstrings.open.addEventListener("click", () => {
  DOMstrings.modal.classList.add("show-modal");
});
DOMstrings.open_cart.addEventListener("click", () => {
  DOMstrings.modal_cart.classList.add("show-modal");
});
DOMstrings.close.addEventListener("click", () => {
  DOMstrings.modal.classList.remove("show-modal");
});
window.addEventListener("click", e =>
  e.target === modal ? modal.classList.remove("show-modal") : false ||
  e.target ===  DOMstrings.modal_cart ? DOMstrings.modal_cart.classList.remove("show-modal") : false 
);
DOMstrings.form.addEventListener("submit", e => {
  e.preventDefault();
  formView.checkRequired([
    DOMstrings.username,
    DOMstrings.email,
    DOMstrings.password,
    DOMstrings.password2
  ]);
  formView.checkLength(DOMstrings.username, 3, 15);
  formView.checkLength(DOMstrings.password, 6, 15);
  formView.checkEmail(DOMstrings.email);
  formView.checkPassword(DOMstrings.password, DOMstrings.password2);
});
DOMstrings.productsEl.addEventListener("click", e => {
  const prodInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains("product-info");
    } else {
      return false;
    }
  });
  console.log(prodInfo);
  if(prodInfo){
    const prodID = prodInfo.getAttribute('data-productID');
    state.id = new Id(prodID);
    console.log(state.id);
  }
});
cartView.removeCartItem();
