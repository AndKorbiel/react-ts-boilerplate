import { useEffect, useState } from "react";
import { Product } from "../types";

export default function useProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return products;
}
