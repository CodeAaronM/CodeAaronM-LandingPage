import React from "react";
//create your first component
const Card = () => {
	return (
		<div className="text-center col d-flex justify-content-around">
			<div className="card" style={{ width: "450px" }}>
  <img src="https://picsum.photos/450/325" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
		</div>
	);
};

export default Card;
