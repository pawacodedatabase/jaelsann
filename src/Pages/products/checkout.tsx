import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './product'; // Import product details
import CheckoutForm from './CheckoutForm';

interface CartItem {
  productId: number;
  quantity: number;
}

const deliveryFees = [
  { state: 'Lagos', fee: 500 },
  { state: 'Abuja', fee: 700 },
  { state: 'Kano', fee: 600 },
  { state: 'Oyo', fee: 400 },
  { state: 'Rivers', fee: 650 },
  // Add more states as needed
];

const Checkout: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [billingInfo] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });
  const [selectedDeliveryState, setSelectedDeliveryState] = useState<string>('');
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const navigate = useNavigate();

  // Load cart from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const product = products.find(product => product.id === item.productId);
    if (product) {
      return total + item.quantity * product.price;
    }
    return total;
  }, 0);

  const handleDeliveryStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedDeliveryState(state);
    const selectedFee = deliveryFees.find(fee => fee.state === state);
    if (selectedFee) {
      setDeliveryFee(selectedFee.fee);
    }
  };

  // Handle form submission
  const handlePlaceOrder = () => {
    if (!billingInfo.name || !billingInfo.email || !billingInfo.address || !billingInfo.paymentMethod) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    // Generate unique order ID
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Create the order data
    const order = {
      orderId,
      date: new Date().toISOString(),
      products: cart.map(item => {
        const product = products.find(product => product.id === item.productId);
        return product ? { ...product, quantity: item.quantity } : null;
      }).filter(Boolean),
      totalPrice: totalPrice + deliveryFee,  // Add delivery fee to total price
      billingInfo
    };

    // Save the order to local storage
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    // Clear the cart and navigate to order confirmation page
    localStorage.removeItem('cart');
    navigate('/confirmation', { state: { orderId } });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-2xl font-semibold mb-6" style={{ color: '#1a2d42' }}>Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="border p-4 rounded-lg shadow-md" style={{ backgroundColor: '#f9f9f9' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#234156' }}>Order Summary</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Image</th>
                  <th className="border p-2 text-left">Product</th>
                  <th className="border p-2 text-left">Quantity</th>
                  <th className="border p-2 text-left">Price</th>
                  <th className="border p-2 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => {
                  const product = products.find(product => product.id === item.productId);
                  return product ? (
                    <tr key={item.productId} className="hover:bg-gray-100">
                      <td className="border p-2">
                        <img src={product.images[0]} alt={product.name} className="h-16 w-16 object-cover rounded" />
                      </td>
                      <td className="border p-2" style={{ color: '#234156' }}>{product.name}</td>
                      <td className="border p-2" style={{ color: '#234156' }}>{item.quantity}</td>
                      <td className="border p-2" style={{ color: '#234156' }}>₦{product.price.toFixed(2)}</td>
                      <td className="border p-2" style={{ color: '#234156' }}>₦{(item.quantity * product.price).toFixed(2)}</td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <label htmlFor="deliveryState" className="block text-sm font-medium text-gray-700">Select Delivery State</label>
            <select
              id="deliveryState"
              name="deliveryState"
              value={selectedDeliveryState}
              onChange={handleDeliveryStateChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select State</option>
              {deliveryFees.map((stateFee) => (
                <option key={stateFee.state} value={stateFee.state}>
                  {stateFee.state}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-right">
            <h3 className="text-xl font-semibold" style={{ color: '#1a2d42' }}>Delivery Fee: ₦{deliveryFee}</h3>
          </div>
          <div className="mt-4 text-right">
            <h3 className="text-xl font-semibold" style={{ color: '#1a2d42' }}>Total: ₦{(totalPrice + deliveryFee).toFixed(2)}</h3>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="border p-4 rounded-lg shadow-md" style={{ backgroundColor: '#f9f9f9' }}>
          <CheckoutForm />

          <button  onClick={handlePlaceOrder}></button>
          
          {/* Delivery State Dropdown */}
         

        
        </div>
      </div>
    </div>
  );
};

export default Checkout;
