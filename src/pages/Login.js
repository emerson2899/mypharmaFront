import React from "react";
import { useEffect, useState } from "react";
import { Button, Cadast, TitleLogin } from '../components/style'

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState()
    return(<>
    <Cadast>
    <TitleLogin>
        Login
    </TitleLogin> 
   
    <label>E-mail:</label><br/>
    <input type='email' value={email} onchange={(e) => setEmail(e.target.value)} /> <br/><br/>
    <label>Senha:</label><br/>
    <input type="password" value={senha} onchange={(e) => setSenha(e.target.value)} />
    <br/><br/>
    

    <Button>Logar</Button> 
    </Cadast>

    
    </>)
}

export default Login