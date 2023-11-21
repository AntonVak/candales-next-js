import Boston from "../../../public/images/Boston/image0.jpeg";
import Cube from "../../../public/images/Cube/image3.jpeg";
import Lola from "../../../public/images/Lola/Lola12.jpg";

const shopList = [
  {
    id: 1,
    name: "Boston",
    price: 100,
    image: Boston,
  },
  {
    id: 2,
    name: "Cube",
    price: 202,
    image: Cube,
  },
  {
    id: 3,
    name: "Lola",
    price: 300,
    image: Lola,
  },
];

export const fetchShopList = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(shopList);
      
    }, 1500);
  });
