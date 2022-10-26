function App() {
  return (
    <div className="app-container">
      <h1 className="kutez-title">
        <span>The Company</span>
      </h1>
      <h2 className="kutez-next-title">Shipping Time Calculator</h2>
      <form>
        <div className="kutez-input">
          <div className="order-date-input">
            <i class="fa-regular fa-calendar"></i>
            <input type="text" placeholder="Order Date" />
          </div>
          <div className="fabric-type-input">
            <select>
              <option value="" disabled selected hidden>
                Choose a drink
              </option>
              <option value="cotton">Cotton</option>
              <option value="linen">Linen</option>
            </select>
          </div>
          <div className="quantity-input">
            <i class="fa-solid fa-circle-info"></i>
            <input type="number" placeholder="Quantity" max="100" />
          </div>
        </div>
        <div className="kutez-button">
          <button type="submit">Calculate</button>
        </div>
      </form>
      <div className="kutez-info">
        <h3>
          Your Estimated Shipping Time Is <span>26 September 2023</span>
        </h3>
      </div>
    </div>
  );
}

export default App;
