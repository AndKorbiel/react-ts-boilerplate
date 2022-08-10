export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export type LoginStatus = {
  isLoggedIn: boolean;
};

export type Action = { type: "logIn" } | { type: "logOut" };
