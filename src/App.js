import React, { useState } from "react";
function App() {
  const [date, setDate] = useState(null);
  const [type, setType] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [days, setDays] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "cotton") {
      if (quantity <= 50) {
        console.log("2 gün cotton");
        const today = new Date(date);
        today.setDate(today.getDate() + 2);
        setDays(today.toDateString());
        setDate("");
        setType("");
        setQuantity("");
      } else {
        console.log("3 gün");
        const today = new Date(date);
        today.setDate(today.getDate() + 3);
        setDays(today.toDateString());
        setDate("");
        setType("");
        setQuantity("");
      }
    }
    if (type === "linen") {
      if (quantity <= 50) {
        console.log("4 gün linen");
        const today = new Date(date);
        today.setDate(today.getDate() + 4);
        setDays(today.toDateString());
        setDate("");
        setType("");
        setQuantity("");
      } else {
        console.log("5 gün");
        const today = new Date(date);
        today.setDate(today.getDate() + 5);
        setDays(today.toDateString());
        setDate("");
        setType("");
        setQuantity("");
      }
    }
  };
  return (
    <div className="app-container">
      <h1 className="kutez-title">
        <span>The Company</span>
      </h1>
      <h2 className="kutez-next-title">Shipping Time Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="kutez-input">
          <div className="order-date-input">
            <input
              type="Date"
              placeholder="Order Date"
              name="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="fabric-type-input">
            <i class="fa-solid fa-chevron-down"></i>
            <select
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Fabric Type
              </option>
              <option value="cotton">Cotton</option>
              <option value="linen">Linen</option>
            </select>
          </div>
          <div className="quantity-input">
            <i
              class="fa-solid fa-circle-info"
              title="Shipping Dates May Vary Based on Quantity"
            ></i>
            <input
              type="number"
              required
              placeholder="Quantity"
              max="100"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <div className="kutez-button">
          <button type="submit">Calculate</button>
        </div>
      </form>
      <div className="kutez-info">
        <h3>
          <span>
            {quantity === null
              ? "Please Fill All Information Correctly."
              : "Your Estimated Shipping Time Is : " + days}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default App;
