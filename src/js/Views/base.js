export const DOMstrings = {
  search: document.getElementById("search"),
  submit: document.getElementById("submit"),
  productsEl: document.getElementById("products"),
  random: document.getElementById("random"),
  resultHead: document.getElementById("result-heading"),
  singleProduct: document.querySelector(".product"),
  toggle: document.getElementById('toggle'),
  close: document.getElementById('close'),
  open: document.getElementById('open'),
  modal: document.getElementById('modal'),
  open_cart: document.getElementById('open-cart'),
  modal_cart:document.getElementById('modal__cart'),
  form: document.getElementById('form'),
  username: document.getElementById('username'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  password2: document.getElementById('password2'),
  removeCartItemButtons: document.getElementsByClassName('btn-danger'),
  cartItemContainers :document.getElementsByClassName('cart-items'),
  cartTotalPrice: document.getElementsByClassName('cart-total-price'),
  quantityInputs: document.getElementsByClassName('cart-quantity-input')
};
export const elementStrings = {
  loader: "loader"
};
export const renderLoader = parent => {
  const loader = `
  <div class="${elementStrings.loader}">
  <svg>
  <use href="img/icons.svg#icon-cw"></use>
  </svg>
  </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
  setTimeout(clearLoader,2000);
};


export const clearLoader = () =>{
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if(loader){
    loader.parentElement.removeChild(loader);
  }
}