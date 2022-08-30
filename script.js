const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
addToCartButton.addEventListener('click', addToCartClicked);
});

const addToShoppingCartButton = document.querySelectorAll('.adding');
addToShoppingCartButtons.forEach((addToCartButton) => {
addToCartButton.addEventListener('click', () => {
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    html: 
        '<p>Successfully added</p>',
    showConfirmButton: false,
    timer: 2000
    })
});
});

// No me funciona al presionar el botón para quitar del carrito

// const deletebutton = document.querySelectorAll('.delete');
// deletebutton.forEach((deletion) => {
//   deletion.addEventListener('click', () => {
//     Swal.fire({
//       position: 'top-end',
//       icon: 'success',
//       html: 
//         '<p>Successfully removed</p>',
//       showConfirmButton: false,
//       timer: 2000
//     })
//   });
// });

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
'.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
const button = event.target;
const item = button.closest('.item');

const itemTitle = item.querySelector('.item-title').textContent;
const itemPrice = item.querySelector('.item-price').textContent;
const itemImage = item.querySelector('.item-image').src;

addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
);
for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
    let elementQuantity = elementsTitle[
        i
    ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
    );
    elementQuantity.value++;
    $('.toast').toast('show');
    updateShoppingCartTotal();
    return;
    }
}

const shoppingCartRow = document.createElement('div');
const shoppingCartContent = `
<div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete delete" type="button">X</button>
            </div>
        </div>
    </div>`;
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);

shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
let total = 0;
const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
    '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
    shoppingCartItemPriceElement.textContent.replace('€', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
    '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
    shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}

function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
}


// Form

class User{
    constructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}
}
const users = []

const totalButton = document.getElementById("totalButton")
const totalDiv = document.getElementById("totalDiv")

totalButton.addEventListener("click", () =>{
    divUsers.innerHTML += `
    <div class="totalP" id="user${indice}" style="width: 18rem;margin:3px;">
        <p>${getTotal(shoppingCart)}</p>
    </div>
`
})

const formId = document.getElementById("formId")

formId.addEventListener("submit", (event) => {
    event.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = new User(username, email, password)
    users.push(user)

    formId.reset()

    console.log(users)
})

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem('users'))
} else {
    localStorage.setItem('users', JSON.stringify(users))
}