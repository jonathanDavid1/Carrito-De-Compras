import loader from './components/loader'
import showMenu from './components/showMenu'
import showCart from './components/showCart'
import products from './components/products'
import getProducts from './helpers/getProducts'
/* UI */
/*Ocultar loader*/

loader()
/* Mostrar menu*/
showMenu()
/*Mostrar Carrito*/
showCart()
/* End UI Elements*/
/*Products*/
products(await getProducts())
