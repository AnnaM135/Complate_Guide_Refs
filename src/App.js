import { useState, useRef } from "react";
import './App.css';
import { InputModal } from "./components/inputModal";


function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(6);
  const price = 20;
  const editBtnRef = useRef(null);

  const onClose = () => setModalOpen(false);
  const onSubmit = value => setQuantity(value);

  return (
    <div className="App">
      <h1>Checkout</h1>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${price * quantity}</td>
            <td>
              <button ref={editBtnRef} onClick={() => setModalOpen(!isModalOpen)}>
                Edit quantity
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isModalOpen && (
        <InputModal 
          onSubmit={onSubmit}
          initialValue={quantity}
          onClose={onClose}
          editBtnRef={editBtnRef}
        />
      )}
    </div>
  );
}

export default App;
