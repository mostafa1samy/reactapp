import '../../css/product/product.css'
const Products = ({products}) => {
    return ( 
        <div className="prducts">
            {products.map((product)=>(
                <div  className="product-item" key={product.id}>
                  
                        <img src={product.image} alt={product.title} />
                        <div className="product-desc" >
                            <p>{product.title}</p>
                            <span>{product.price}</span>
                        </div>


                  
                    
                    <button>Add To Cart</button>
                    </div>
            ))}
        </div>
     );
}
 
export default Products;