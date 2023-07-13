function getProducts () {
    return window.fetch('https://services-academlo-shopping.onrender.com/')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) =>
    { console.log (err) } )
}
export default getProducts