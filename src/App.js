import React,{useEffect ,useState} from 'react';
import './App.css';
import Products from './components/Products/Products';
import Navbar from './components/Nav/Navbar';
import Pagination from './components/Pagination/Pagination'
import axios from 'axios';
function App() {
  const [product , setProduct] = useState([])
const [loading , setIsLoading] = useState(false)
const[currentPage ,setCurrentPage] = useState(1);
    const[productsPerPage ,setProductsPerPage] = useState(6);
    const getProductData = async() =>{
try{
        const res =await axios.get("https://dummyjson.com/products");
        setIsLoading(true);
        setProduct(res.data.products)
        console.log(res.data.products);

}catch(error ){
  console.log(error)
}
  }

    useEffect(() => {
 getProductData();
    },[loading])
    if(product.length === 0){
      return <div class="loader">
        <div></div>
        <div></div>
      </div>
      } 
      //Get Current Products
const indexOfLastProduct =currentPage * productsPerPage;
const indexOfFirstProduct =indexOfLastProduct  - productsPerPage;
  const currentProduct = product.slice(indexOfFirstProduct ,indexOfLastProduct)

const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
<Navbar></Navbar>      
<div className='main'>
      <Products product={currentProduct} loading={loading}>

        
      </Products>
      </div>
      <Pagination productsPerPage={productsPerPage} totalProducts={product.length} paginate={paginate}></Pagination>
    </div>
  );

}

export default App;
