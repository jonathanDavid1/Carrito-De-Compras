function showCart () {
    const btncart = document.querySelector('.btn--cart')
    const cart = document.querySelector('.cart')

    btncart.addEventListener('click', function(){
        cart.classList.toggle('show--cart')
    })
    cart.addEventListener('click', function (e) {
        if (e.target.closest('.btn--close')){
            cart.classList.remove('show--cart')
        }
    })
}
export default showCart