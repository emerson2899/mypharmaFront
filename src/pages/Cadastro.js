import React from "react";
import { useEffect, useState } from "react";
import { Prod, Cadast, Button } from "../components/style";


function Cadastro(){

    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();    
    const [inputNumero, setInputNumero] = useState();


    return(<>
  
      <Cadast>
          <h1>Faça seu Cadastro</h1> <hr/>
          <label>Nome:</label> <br/>
          <input type='text' placeholder="Emerson" value={inputName} onchange={(e) => setInputName(e.target.value)} /><br/><br/>
          <label>E-mail:</label><br/>
          <input type='email' placeholder="emerson@login.com.br" value={inputEmail} onchange={(e) => setInputEmail(e.taget.value)} /> <br/><br/>
          <label>Número de Telefone:</label><br/>
          <input type="telephone" placeholder="(19)9999-9999"value={inputNumero} onchange={(e) => setInputNumero(e.target.value)} /><br/><br/>
          <Button type="submit">Cadastrar</Button>
      </Cadast>
      <br/><br/>
      

      

      

    
    </>)
}
export default Cadastro