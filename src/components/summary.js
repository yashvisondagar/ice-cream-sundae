import React, { useState } from "react";
import { useSundaeContext } from "../SundaeContext";
import { useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const { scoops, toppings, grandTotal, scoopsTotal, toppingsTotal } =
    useSundaeContext();

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleConfirm = () => {
    if (isChecked) {
      navigate("/thankYou");
    } else {
      alert(
        "Please agree to the terms and conditions before confirming the order."
      );
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Filter toppings to display only selected ones
  const selectedToppings = toppings.filter((topping) => topping.selected);

  // Filter scoops to display only those with quantity greater than 0
  const selectedScoops = scoops.filter((scoop) => scoop.quantity > 0);

  return (
    <div className="summary">
      <div className="summary-details">
        <h2>Order Summary</h2>

        <div className="scoops-section">
          <h3>Scoops: ${scoopsTotal.toFixed(2)}</h3>
          <ul className="summary-list">
            {selectedScoops.map((scoop) => (
              <li key={scoop.name}>
                {scoop.quantity}{" "}
                {scoop.name.charAt(0).toUpperCase() + scoop.name.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className="toppings-section">
          <h3>Toppings: $ {toppingsTotal.toFixed(2)}</h3>
          <ul>
            {selectedToppings.map((topping, index) => (
              <li key={index}>{topping.name}</li>
            ))}
          </ul>
        </div>

        <div className="grand-total-section">
          <h3>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
        </div>

        <label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            className="terms-checkbox"
            required
          />{" "}
          I agree to the terms and conditions
        </label>
        <br />
        <br />
        <button onClick={handleConfirm} className="btn-confirm">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
