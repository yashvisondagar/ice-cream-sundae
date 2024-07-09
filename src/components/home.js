import React from "react";
import { useSundaeContext } from "../SundaeContext";
import { useNavigate } from "react-router-dom";
import cat1 from "../images/cat1.png";
import cat2 from "../images/cat2.png";
import cat3 from "../images/cat3.png";
import cat4 from "../images/cat4.png";
import cat5 from "../images/cat5.png";
import cat6 from "../images/cat6.png";

const HomePage = () => {
  const {
    scoops,
    toppings,
    grandTotal,
    scoopsTotal,
    toppingsTotal,
    updateScoopCount,
    handleToppingChange,
  } = useSundaeContext();

  const navigate = useNavigate();

  const handleScoopChange = (name, quantity) => {
    updateScoopCount(name, quantity);
  };

  const handleSubmit = () => {
    navigate("/summary");
  };

  // Static list of toppings
  const staticToppings = [
    { name: "Gummi bears", image: cat1 },
    { name: "Cold Cherry", image: cat2 },
    { name: "Hot Fudge", image: cat3 },
    { name: "Caramel", image: cat4 },
    { name: "Cherry", image: cat5 },
    { name: "Strawberry", image: cat6 },
  ];

  return (
    <div className="container">
      <div className="container-icecream">
        <h2 className="ice-intro">Design Your Sundae!</h2>
        <h3 className="scoops-intro">Scoops</h3>
        <p>$ 2.00 each</p>
        <p>Scoops total: ${scoopsTotal}</p>

        <div className="flex">
          {scoops.map((scoop) => (
            <div className="flavours" key={scoop.name}>
              <br />
              <img
                src={scoop.image}
                alt={scoop.name}
                style={{ width: "230px", margin: "30px" }}
              />
              <br />
              <label
                style={{
                  marginLeft: "90px",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                htmlFor={scoop.name}
              >
                <span>
                  {scoop.name.charAt(0).toUpperCase() + scoop.name.slice(1)}
                </span>
              </label>
              <input
                type="number"
                id={scoop.name}
                value={scoop.quantity}
                onChange={(e) =>
                  handleScoopChange(
                    scoop.name,
                    parseInt(e.target.value, 10) || 0
                  )
                }
                min="0"
                step="1"
                style={{
                  width: "50px",
                  backgroundColor: "white",
                  marginLeft: "10px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
          ))}
        </div>

        <div className="toppings">
          <h3>Toppings</h3>
          <p>$ 3.00 each</p>
          <p>Toppings total: ${toppingsTotal}</p>
          <div className="container-toppings">
            {staticToppings.map((topping) => (
              <div key={topping.name} className="topping">
                <img
                  src={topping.image}
                  alt={topping.name}
                  style={{ width: "230px", margin: "30px" }}
                />
                <br />
                <label
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={toppings.some(
                      (t) => t.name === topping.name && t.selected
                    )}
                    onChange={() => handleToppingChange(topping.name)}
                    style={{ marginLeft: "90px" }}
                  />
                  {topping.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grand-total">
          <h3 className="grandt-total">Grand Total: ₹{grandTotal}</h3>
        </div>

        <button onClick={handleSubmit} className="btn-order">
          Order Sundae
        </button>
      </div>
    </div>
  );
};

export default HomePage;
