import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const user = Math.floor(Math.random() * 90) + 10;
  const navigate = useNavigate();

  const reDirecthandle = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="thankyou">
      <div className="thankyou-container">
        <div className="thankyou-details">
          <h1>Thank you!</h1>
          <h2>{`Your Order Number is ${user}`}</h2>
          <h6>As per our terms and conditions, nothing will happen now</h6>
          <button className="btn-redirect" onClick={reDirecthandle}>
            Create New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
