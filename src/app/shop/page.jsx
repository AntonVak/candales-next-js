"use client"

import API from "@/components/api";
import { useEffect } from 'react';
const Shop = () => {
  
  useEffect (() => {
    console.log('Component mounted');
    // Ваши другие действия
  }, []);

  console.log(API.fetchShopList());
  return (
    <div>
      Shop22225455
      <div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
