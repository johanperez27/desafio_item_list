import data from '../mockData'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainers = ({greeting}) => {

  const [productList,setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    }).catch((error) => console.log(error));
  }, []);

  const getProducts = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(data);
      },2000);
  });

  return (
    <div>
      <ItemList lista={productList} />
    </div>
  );
};

export default ItemListContainers;