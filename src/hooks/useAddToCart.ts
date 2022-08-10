import { useEffect, useState } from "react";

export default function useAddToCart(
  initialState: Array<any>
): [Array<any>, (data: any) => void] {
  const [cart, addToCart] = useState(initialState);

  const handleAdd = (data: any) => {
    addToCart((cart) => [...cart, data]);
  };

  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  return [cart, handleAdd];
}
