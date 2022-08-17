const productList = [
    {
        name: 'Kitty Flip-flops',
        number: '1',
        price: 10,
        color: 'purple',
        stock: 3,
        brand: 'Kitty Girl'
    },
    {
        name: 'Cat Hat',
        number: '2',
        price: 5,
        color: 'black',
        stock: 1,
        brand: 'Catwoman'
    },
    {
        name: 'Kitty Pijamas',
        number: '3',
        price: 13,
        color: 'pink',
        stock: 3,
        brand: 'Kitty Girl'
    },
    {
        name: 'Kitty Sneakers',
        number: '4',
        price: 16,
        color: 'white',
        stock: 3,
        brand: 'Kitty Girl'
    },
    {
        name: 'Kitty Backpack',
        number: '5',
        price: 16,
        color: 'purple',
        stock: 1,
        brand: 'Catwoman'
    },
    {
        name: 'Kitty Suitcase',
        number: '6',
        price: 20,
        color: 'black',
        stock: 1,
        brand: 'Catwoman'
    }
]

class Product {
    constructor(name, number, price, color, stock, brand){
        this.name = name;
        this.number = number;
        this.price = price;
        this.color = color;
        this.stock = stock;
        this.brand = brand;
    }

    dataInput(){
        return `N°: ${this.number} > ${this.name} $${this.price}`;
    }
    notification(){
        return `${this.name} the price is ${this.price}`
    }
}

const shoppingKart = []

// Funciones
const productDataInput = (arrayProducts) => {
    return arrayProducts.map( (element)=> element.dataInput()).join('\n')
}

const addToShoppingKartByNumber = (products) => {
    const productData = productDataInput(products);
    const number = prompt('Select the product number you want to buy:\n' + productData + '\n' + 'To exit, enter 0 or press Enter.' );
    const product = products.find((product) => product.number === number);
    if (!product) return;
    shoppingKart.push(product);
    alert('You have added the product to the Shopping Kart!')
}

const showShoppingKart = (shoppingKartProducts) => {
    shoppingKartProducts.forEach((product) => {
        console.log(product.notification());
    });
}
const getTotal = (arrayProducts) => {
    let total = 0;
    arrayProducts.forEach((product) => {
        total += product.price;
    });
    return total;
}

const products = productList.map(product => new Product(
    product.name,
    product.number,
    product.price,
    product.color,
    product.stock,
    product.brand
));

// addToShoppingKartByNumber(products)


// alert('You have to pay $' + getTotal(shoppingKart))
// showShoppingKart(shoppingKart);
// console.log(getTotal(shoppingKart));

// let adding = document.getElementsByClassName("btn");
// adding.addEventListener("click", addItem)
// function addItem() {
//     console.log("You have added the item to the shopping kart")
// }

const addToKart = document.getElementById("b1");
addToKart.addEventListener("click", addToShoppingKartByNumber)
function addToShoppingKartByNumber(products){
    console.log("You have added the item to the shopping kart")
}

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
            <p>${getTotal(shoppingKart)}</p>
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