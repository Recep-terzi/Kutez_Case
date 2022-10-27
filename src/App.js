import { useState } from "react";

function App() {
  const [date, setDate] = useState();
  const [type, setType] = useState();
  const [quantity, setQuantity] = useState();
  const [days, setDays] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "cotton") {
      if (quantity <= 50) {
        console.log("2 gün cotton");
        setDays("2 gün");
        setDate("");
        setType("");
        setQuantity("");
      } else {
        console.log("3 gün");
        setDays("3 gün");
        setDate("");
        setType("");
        setQuantity("");
      }
    }
    if (type === "linen") {
      if (quantity <= 50) {
        console.log("4 gün linen");
        setDays("4 gün");
        setDate("");
        setType("");
        setQuantity("");
      } else {
        console.log("5 gün");
        setDays("5 gün");
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
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="fabric-type-input">
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="" disabled selected hidden>
                Fabric Type
              </option>
              <option value="cotton">Cotton</option>
              <option value="linen">Linen</option>
            </select>
          </div>
          <div className="quantity-input">
            <i class="fa-solid fa-circle-info"></i>
            <input
              type="number"
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
          Your Estimated Shipping Time Is <span>{days}</span>
        </h3>
      </div>
    </div>
  );
}

export default App;
