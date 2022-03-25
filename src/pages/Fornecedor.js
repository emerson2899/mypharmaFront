import React from "react";
import { useEffect, useState } from "react";
import { Prod, Cadast, Button } from "../components/style";


function Fornecedor(){

    const [inputNameFantasia, setInputNameFantasia] = useState();
    const [inputNameSocial, setInputNameSocial] = useState();
    const [inputEmail, setInputEmail] = useState(); 
    const [inputCnpj, setInputCnpj] = useState();   
    const [inputNumero, setInputNumero] = useState();


    return(<>
  
      <Cadast>
          <h1>Faça seu Cadastro</h1> <hr/>
          <label>Nome Fantasia:</label> <br/>
          <input type='text' placeholder="Emerson" value={inputNameFantasia} onchange={(e) => setInputNameFantasia(e.target.value)} /><br/><br/>
          <label>Nome Social</label> <br/>
          <input type='text' placeholder="Emerson" value={inputNameSocial} onchange={(e) => setInputNameSocial(e.target.value)} /><br/><br/>
          <label>Cadastro de Pessoa Fisica</label><br/>
          <input type="number" placeholder="00 000 000 /0000"value={inputCnpj} onchange={(e) => setInputCnpj(e.target.value)} /><br/><br/>
          <label>E-mail</label><br/>
          <input type='email' placeholder="emerson@login.com.br" value={inputEmail} onchange={(e) => setInputEmail(e.taget.value)} /> <br/><br/>
          <label>Número de Telefone</label><br/>
          <input type="telephone" placeholder="(19)9999-9999"value={inputNumero} onchange={(e) => setInputNumero(e.target.value)} /><br/><br/>
          <Button type="submit">Cadastrar</Button>
      </Cadast>
      <br/><br/>
      

      

      

    
    </>)
}
export default Fornecedor