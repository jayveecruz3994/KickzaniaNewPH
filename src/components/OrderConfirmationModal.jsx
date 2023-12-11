import React from 'react';
import './OrderConfirmation.css'

const OrderConfirmationModal = ({ closeModal }) => {

  const handleNavigateHome = () => {
    window.location.href = '/'
    closeModal(); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Confirmed!</h2>
        <p>Your order has been successfully placed. Thank you for choosing Kickzania!</p>
        <button onClick={handleNavigateHome} className='backToHome'>Back to Homepage</button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;