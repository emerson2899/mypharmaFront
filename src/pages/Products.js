
import { useEffect } from "react";
import { useState } from "react";
import { Prod } from "../components/style";
import apiProducts from "../components/api";





export default function Products(){

    const [products, setProducts] = useState([]);

   /* const loadProducts = () =>{
        fetch('http://localhost:4000/api/homeRemedios')
        .then(response => response.json()) 
        .then((json) => {
            setProducts(json)
        })
    } */

    
 useEffect(() =>{
        apiProducts.get('homeRemedios').then(({data}) => {
            setProducts(data);
        });
    }, [])

    console.log(products)
  
    
    return(
        <div>
   
       <label>Localizar Produto:</label>
       <input type="text" />
       <div className="cont">
        <h1>Total de Produtos: {products.length}</h1>
       


           {products.map(produto =>(
             <Prod key={produto.id}>
            <strong>Produto:</strong>{produto.name}  <br/>
         
            <strong>código:</strong> {produto.id} <br/>
         
            <strong>Descrição: </strong> {produto.description} <br/>
         
            <strong>Preço:</strong> {produto.price} <br/>
         
            <strong>Estoque:</strong> {produto.estoque} <br/>
         
            <strong> Categoria: </strong> {produto.category} <br/>
         
            <strong> Marca: </strong>{produto.brandin} <br/>
         
         
         
             </Prod>
           )

           )}
            
           

           
          
           
       
     </div>
     </div>
    )
}


