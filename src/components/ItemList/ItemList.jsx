import Item from "../Item/Item";
const ItemList = ({lista}) => {
  
  return (
    <div>
      {
        //aqui no pongo el return por ser solo 1 elemento que retorna
        lista.map((product)=>(
          <Item 
            key={product.id}
            title={product.title}
            price={product.price} 
            image={product.image} 
          />
        ))
      }
    </div>
  )
}

export default ItemList;