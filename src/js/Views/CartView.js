import { DOMstrings } from "./base";

export const removeCartItem = () => {
  const removeCartItemButtons = DOMstrings.removeCartItemButtons;
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", e => {
     deleteCartItem(e);
    });
  }
  const quantityInputs = DOMstrings.quantityInputs;
  for(let i = 0;i<quantityInputs.length;i++){
      let input = quantityInputs[i];
      input.addEventListener('change',quantityChanged);
  }
};
const quantityChanged = (e) =>{
    let input = e.target;
    if(isNaN(input.value) || input.value <= 0){
     input.value = 1;
    }
    updateCartTotal();
}
const deleteCartItem=(e)=>{
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}
export const updateCartTotal = () => {
  const cartItemContainer = DOMstrings.cartItemContainers[0];
  const cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName(
      "cart-price"
    )[0];
    const quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElement.value;
    total = total + (price * quantity);
  }
 DOMstrings.cartTotalPrice[0].innerText = "$" + total.toFixed(2);
};
