function App() {
  return (
    <div className="app-container">
      <h1 className="kutez-title">The Company</h1>
      <h2 className="kutez-next-title">Shipping Time Calculator</h2>
      <div className="kutez-input">
        <form>
          <div className="order-date-input">
            <input type="text" placeholder="Order Date" />
          </div>
          <div className="fabric-type-input">
            <input type="text" placeholder="Fabric Type" />
          </div>
          <div className="quantity-input">
            <input type="text" placeholder="Quantity" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
