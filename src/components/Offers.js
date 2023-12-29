import React from "react";
import { offer } from "../assets";
import Button from "react-bootstrap/Button";

const Offers = () => {
  return (
    <div className="offers ">
      <h1 className="pt-5">Exclusive Offers For Everyone</h1>
      <div className="m-3">
        <Button variant="outline-success" className="p-3">
          Branded promotions
        </Button>
      </div>

      <div href="">
        <img className="offerImg" src={offer} alt="offers"></img>
      </div>

    </div>
  );
};

export default Offers;
