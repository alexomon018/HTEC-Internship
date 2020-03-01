import { DOMstrings } from "./base";

export const getInput = () => DOMstrings.search.value;
export const clearInput = () => (DOMstrings.search.value = "");
export const clearResults = () => (DOMstrings.resultHead.innerHTML = "");

export const renderProduct = product => {
  if (product.length > 0) {
    const html = product
      .map(
        prod => `
             <div class='product'>
             <img src='${prod.photo}'  alt='title'>
             <div class='product-info' data-productID='${prod.id}'>
             <h3>${prod.desc}</h3>
             <button class='addBtn'>Add to Cart</button>
             </div>
             </div>
           `
      )
      .join("");
    DOMstrings.productsEl.innerHTML = html;
  } else {
    DOMstrings.resultHead.innerHTML = `<h2>There are not search results for that item!</h2>`;
  }
};
