import React, { useState } from 'react';
import Title from './../components/Title/index';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    function handleNomeChange(event) {
        setNome(event.target.value);
    }  
    
    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleEnderecoChange(event) {
        setEndereco(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Nome: ${nome}, Telefone: ${telefone}, Endereco: ${endereco}`);
    }

    return (


        <div className="form-custom">
            <div>
            <Title
                title={"Cadastro de Assinante"}></Title>
            
        </div>
        <div className ="card"> 
            <form onSubmit={handleSubmit}>
                <div>Dados Pessoais</div>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={handleNomeChange} />
                </label>
                <br />
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={handleTelefoneChange} />
                </label>
                <br />
                <label>
                    Endereço:
                    <input type="text" value={endereco} onChange={handleEnderecoChange} />
                </label>
                <br />
                <div>Plano Escolhido</div>
                <button type="submit">Free</button>
                <button type="submit">Plus</button>
            </form>
            </div>
            <div className ="card"> 
            <div>Dados do Cartão</div>
            </div>
        </div>
    );
}