const shirtPrice = 8
const shirtQuantity = 2
const socksPrice = 10
const socksQuantity = 1
const shippingCost = 5
const productCost = (shirtQuantity*shirtPrice) + (socksQuantity*socksPrice)
const totalCost = (productCost + shippingCost)
const today = dayjs().format('MMMM D')
const time = dayjs().format('HH:mm:ss')

const container = document.querySelector('.js-container');
const root = ReactDOM.createRoot(container);

setInterval(() => {
  const div = (
  <div>
    <button>Hello</button>
    <button>Good Job</button>
    <p>paragraph of text {2 + 4}</p>
    <p>My name is Uthman</p>
    <p>Cotton socks</p>
    <p>Price: $10</p>
    <button>Add to Cart</button>
    <p>Product cost: ${productCost}</p>
    <p>Shipping cost: ${shippingCost}</p>
    <p>Total cost: ${totalCost}</p>
    <button>Place your order</button>
    <p>Today is {today}</p>
    <p>Current time: {dayjs().format('HH:mm:ss')}</p>
  </div>
  );
  root.render(div);
}, 1000);