
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Products from './component/product/product';
import data from './data.json'
import { useState } from 'react';
function App() {
  const[products,setProducts]=useState(data)
  console.log(data)
  console.log(products)
  return (
 
    <div className="layout">
          <Header/>
        <main>
<div className='wrapper'>
  
    <Products products={products}/>
    <div className='filter'>
      filter
    </div>

</div>

        </main>
          <Footer/>

    </div>
    
     
    
  );
}

export default App;
