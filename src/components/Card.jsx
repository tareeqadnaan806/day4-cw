import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="cards">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.7Yz8hmVP9SfJs0sSvapKpgHaHa&pid=Api&P=0&h=180"
          alt=""
          className="card-logo"
        />
        <h1>25000</h1>
        <p>Enterprise Organizations Sucessfully launched</p>
      </div>
      <div className="cards">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.w7eES1IJb38qEJU22iLO8gHaGL&pid=Api&P=0&h=180"
          alt=""
          className="card-logo"
        />
        <h1>45000</h1>
        <p>Enterprise users onboarded Seamlesly</p>
      </div>
      <div className="cards">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.9Z5yT_UTOCkiYK4-FNDFuQHaH_&pid=Api&P=0&h=180"
          alt=""
          className="card-logo"
        />
        <h1>200000+</h1>
        <p>Professionals trained on product and strategy</p>
      </div>
    </div>
  );
}

export default Card;
