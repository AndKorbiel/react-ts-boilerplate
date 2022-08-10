import React, { useContext } from "react";
import SpecialOfferContext from "./SpecialOfferContext";

export const SpecialOffer = () => {
  const specialOffer = useContext(SpecialOfferContext);

  return (
    <>
      <p>Speciall offer: {specialOffer.name}</p>
    </>
  );
};
