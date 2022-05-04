const element = (
  // Write your code here.
  <div className="bg_container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="title">Kiran v</h1>
      <p className="paragraph">
        Vishnu institute of Education And Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watchImage"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
