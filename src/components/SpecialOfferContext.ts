import { createContext } from "react";

interface SpecialOfferContextType {
  name: string;
}

const defaultState = {
  name: "Hot desk for 200$",
};

const SpecialOfferContext =
  createContext<SpecialOfferContextType>(defaultState);

export default SpecialOfferContext;
