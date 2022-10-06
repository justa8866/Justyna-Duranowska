export const addToCart = (product, attributes, quantity) => {
    const cart = [];
    const cartStorage = localStorage.getItem("cart");

    if (cartStorage) {
        JSON.parse(cartStorage).map((item) => cart.push(item));
    }

    const cartProductIndex = cart.findIndex(
        (item) => item.product.id == product.id
    );

    if (cartProductIndex > -1) {
        cart[cartProductIndex].quantity += 1;
    } else {
        cart.push({
            product,
            attributes,
            quantity,
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}