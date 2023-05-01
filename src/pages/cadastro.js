import React, { useState } from 'react';
import Title from './../components/Title/index';
import './cadastro.css';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [cvc, setCvc] = useState('');
    const [botaoClicado, setBotaoClicado] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    function handleNomeChange(event) {
        setNome(event.target.value);
    }  
    
    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleEnderecoChange(event) {
        setEndereco(event.target.value);
    }

    function handleNomeCartaoChange(event) {
        setNomeCartao(event.target.value);
    }

    function handleNumeroCartaoChange(event) {
        setNumeroCartao(event.target.value);
    }
    function handleCvcChange(event) {
        setCvc(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (nome && telefone && endereco && nomeCartao && numeroCartao && cvc && botaoClicado) {
            setMensagem("Assinatura realizada com sucesso!");
        console.log(`Nome: ${nome}, 
        Telefone: ${telefone}, 
        Endereco: ${endereco}, 
        Nome do Cartão: ${nomeCartao}, 
        Número do cartão: ${numeroCartao}, 
        CVC: ${cvc}, 
        Plano: ${botaoClicado}`
        );
        } else {
            setMensagem("Por favor, preencha todos os campos antes de assinar.");
        }
    }

    function handleFreeClick(event) {
        event.preventDefault();
        setBotaoClicado("free");
      }

      function handlePlusClick(event) {
        event.preventDefault();
        setBotaoClicado("plus");
      }

    return (
        <div className="form-custom">
            <div>
            <Title
                title={"Cadastro de Assinante"}></Title>
            
        </div>
        <div className="cards-container" style={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>
        <div className ="card" style={{ border: 'none'}}> 
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '1.2em' }}>Dados Pessoais</div>
                <label style={{ marginBottom: '15px' }}>
                Nome:
                <input type="text" value={nome} onChange={handleNomeChange} />
                </label>
                <br/>
                <label style={{ marginBottom: '15px' }}>
                    Telefone:
                    <input type="text" value={telefone} onChange={handleTelefoneChange} />
                </label>
                <br/>
                <label style={{ marginBottom: '15px' }}>
                    Endereço:
                    <input type="text" value={endereco} onChange={handleEnderecoChange} />
                </label>
                <br/>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '1.2em' }}>Plano Escolhido</div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="submit" onClick={handleFreeClick} className={`btn ${botaoClicado === "free" ? "btn-primary" : "btn-secondary"}`} style={{ marginRight: '50px' }}>
                    Free
                </button>
                <button type="submit" onClick={handlePlusClick} className={`btn ${botaoClicado === "plus" ? "btn-primary" : "btn-secondary"}`}>
                Plus
                </button>
                </div>
            </form>
            </div>
            <div className ="card" style={{ border: 'none'}}> 
            <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '1.2em' }}>Dados do Cartão</div>
            <label style={{ marginBottom: '15px' }}>
                Nome do Cartão:
                <input type="text" value={nomeCartao} onChange={handleNomeCartaoChange} />
            </label>
            <br/>
            <label style={{ marginBottom: '15px' }}>
                Número do Cartão:
                <input type="text" value={numeroCartao} onChange={handleNumeroCartaoChange} maxLength={20} />
            </label>
            <br/>
            <label style={{ marginBottom: '15px' }}>
                CVC:
                <input type='password' value={cvc} onChange={handleCvcChange}  maxLength={3} />
            </label>
             </form>
            </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
            <button type="submit"
                className='btn btn-primary'  onClick={handleSubmit}>
                Assinar
            </button>
            {mensagem && <div className="mensagem">{mensagem}</div>}
            </div>
        </div>
    );
}