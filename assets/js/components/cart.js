function cart (db, printProducts) {
    let cart = []
    // Elementos en el DOM
    const productsDOM = document.querySelector('.products__container')
    const notifyDOM = document.querySelector('.notify')
    const cartDOM = document.querySelector('.cart__body')
    const countDOM = document.querySelector('.cart__count--item')
    const totalDOM = document.querySelector('.cart__total--item')
    const checkoutDOM = document.querySelector('.btn--buy')
    //Funciones
    function printCart() {
        let htmlCart = ''
        if (cart.length === 0) {
            htmlCart += `
            <div class="cart__empty">
                    <i class='bx bx-cart'></i>
                    <p class="cart__empty--text"> No hay productos en el carrito</p>
            </div>`
            notifyDOM.classList.remove('show--notify')
        } else {
            for (const item of cart) {
            const product = db.find(p => p.id === item.id)
            htmlCart += `
            <article class="article">
                <div class="article__image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                   <div class="article__content">
                      <h3 class="article___title">${product.name}</h3>
                      <span class="article__price">$${product.price}</span>
                    <div class="article__quantity">
                    </div>
                    <button type="button" class="article__btn
                            remove-from-cart">
                        <i class='bx bx-trash'></i>
                    </button>
                </div>
            </article>
            ` 
            }
            notifyDOM.classList.add('show--notify')
        }
        notifyDOM.innerHTML = showItemsCount()
        countDOM.innerHTML = showItemsCount()
        totalDOM.innerHTML = showTotal()
    }

    function addToCart (id, qty = 1) {
        const itemFinded = cart.find(i => i.id === id)

        if (itemFinded) {
            itemFinded.qty += qty
        } else {
            cart.push({ id, qty})
        }

        printCart()
    }

 
    // addToCart (2)
    
    function removeFromCart (id, qty = 1) {
        const itemFinded = cart.find(i => i.id === id)
        const result = itemFinded.qty - qty
        if (result > 0){
            itemFinded.qty -= qty
        } else {
            cart = cart.filter(i => i.id !==id)
        }

        printCart()
    }



    function deleteFromCart (id) {
        cart = cart.filter(i => i.id !==id)

        printCart()
    }


    function showItemsCount() {
        let suma = 0
        for (const item of cart) {
            suma += item.qty
            return suma
        }
    }

    function showTotal() {
        let total = 0
        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id)
            total += item.qty*productFinded.price
        }
        return total
    }

    function checkout () {
        for (const item of cart) {
        const productFinded = db.find(p => p.id === item.
        id)
        productFinded.quantity -= item.qty
        }
        cart = [] 
        printCart()
        printProducts()
        window.alert('Gracias por su compra')
    }

    //Eventos
    
}

export default cart
        