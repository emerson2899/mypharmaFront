import React from "react";
import { useState } from "react";
import { Prod, Cadast, TitleLogin, Button } from "../components/style";


function AdProduc(){
    const [preco, setpreco] = useState();
    const [nome, setnome] = useState();
    const [description, setDescription] = useState();
    const [estoque, setEstoque] = useState();
    const [categoria, setCategoria] = useState();
    const [fornecedor, setFornecedor] = useState();
    


    let status = "Automatico"

return(<div>
  <div>
      <Cadast>
          <TitleLogin>
          Adicionar novo Produto
          </TitleLogin>

          <label>Código: </label> 
          <input type="text" placeholder="Automatico"  /> <br/><br/>
          <label>Nome:</label> <input type='text' value={nome} onchange={(e) => setnome(e.target.value)} /> <br/><br/>
          <label>Descrição:</label> <input type='text' value={description} onchange={(e) => setDescription(e.target.value)} /> <br/><br/>
          <label>Preço:</label> <input type='number' value={preco} onchange={(e) => setpreco(e.target.value)} />  <br/><br/>
          <label>Estoque:</label> <input type="number" value={estoque} onchange={(e) => setEstoque(e.target.value)} /> <br/><br/>
          <label>Categoria:</label> <input type='text' value={categoria} onchange={(e) => setCategoria(e.target.value)} /> <br/><br/>
          <label>Marca:</label> <input type='text' value={fornecedor} onchange={(e) => setFornecedor(e.target.value)} /> <br/><br/>

          <Button>Cadastrar</Button>

      </Cadast>
     
 

  </div>
  <br/>
   </div>
   
);
}

export default AdProduc