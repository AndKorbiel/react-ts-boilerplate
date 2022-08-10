import { useState } from "react";
import { Product } from "../types";

export default function useSearchQuery(products: Product[]) {
  const [searchQuery, setQuery] = useState<string>("");

  const applySearchQuery = (): Product[] => {
    return searchQuery.length > 2
      ? products?.filter((product) =>
          product.title.toLowerCase().includes(searchQuery)
        )
      : products;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return { applySearchQuery, handleSearch };
}
