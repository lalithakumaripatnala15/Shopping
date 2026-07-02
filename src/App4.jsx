import {
  useState,
  useMemo,
  useCallback,
} from "react";

import "./App4.css";

import Shopping from "./components/Shopping";

import iphone from "./assets/iphone.png";
import laptop from "./assets/laptop.png";
import headphones from "./assets/headphones.png";
import watch from "./assets/watch.png";

function App4() {
  const [products, setProducts] =
    useState([
      {
        id: 1,
        name: "iPhone",
        price: 80000,
        image: iphone,
      },

      {
        id: 2,
        name: "Laptop",
        price: 50000,
        image: laptop,
      },

      {
        id: 3,
        name: "Headphones",
        price: 3000,
        image: headphones,
      },

      {
        id: 4,
        name: "Watch",
        price: 5000,
        image: watch,
      },
    ]);

  const [cart, setCart] =
    useState([]);

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const addProduct =
    useCallback(() => {
      if (!name || !price)
        return;

      setProducts(
        (prev) => [
          ...prev,
          {
            id:
              Date.now(),

            name,

            price:
              Number(
                price
              ),

            image:
              watch,
          },
        ]
      );

      setName("");
      setPrice("");
    }, [name, price]);

  const addToCart =
    useCallback(
      (product) => {
        setCart(
          (prev) => [
            ...prev,

            {
              ...product,

              cartId:
                Date.now(),
            },
          ]
        );
      },
      []
    );

  const removeFromCart =
    useCallback(
      (id) => {
        setCart(
          (prev) =>
            prev.filter(
              (
                item
              ) =>
                item.cartId !==
                id
            )
        );
      },
      []
    );

  const total =
    useMemo(() => {
      return cart.reduce(
        (
          sum,
          item
        ) =>
          sum +
          item.price,

        0
      );
    }, [cart]);

  return (
    <Shopping
      products={
        products
      }
      cart={cart}
      name={name}
      price={price}
      setName={
        setName
      }
      setPrice={
        setPrice
      }
      addProduct={
        addProduct
      }
      addToCart={
        addToCart
      }
      removeFromCart={
        removeFromCart
      }
      total={total}
    />
  );
}

export default App4;