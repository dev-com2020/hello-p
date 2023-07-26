const Cart = require('./Cart.js');
const c = new Cart();

c.addToCart({productId: 10, price: 5.5});
c.addToCart({productId: 15, price: 6.5});
if(c.total() !== 12)
    console.error("NO!");
else
    console.error("YES!");