import React, { useState, useEffect } from 'react';

function ButtonAssistir(props) {
    const { assistido } = props;
    if (assistido) {
      return <div className="btn btn-primary">Assistir Novamente</div>
    } else {
      return <div className="btn btn-primary">Assistir</div>
    }
  }

export default function Card() {
  const [listFilmes, setlistFilmes] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const options = {
    method: 'GET'
  };

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(card => setlistFilmes(card))
      .catch(err => console.error(err))
  }, []);

  if (!listFilmes) {
    return <p>Carregando...</p>;
  }

  const sortedFilmes = [...listFilmes].sort((a, b) => {
    switch (sortBy) {
      case 'titulo':
        return a.titulo.localeCompare(b.titulo);
      case 'ano':
        return a.ano - b.ano;
      case 'nota':
        return b.nota - a.nota;
      default:
        return 0;
    }
  });

  const filteredFilmes = sortedFilmes.filter(filme => {
    return filme.titulo.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
  
        <div className="container text-center">

        <div className="container my-4">
      <div className="row">
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Pesquisar por título"
            className="form-control"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-sm-6">
          <select
            className="form-control"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="">Ordenar por:</option>
            <option value="titulo">Título</option>
            <option value="ano">Ano</option>
            <option value="nota">Nota</option>
          </select>
        </div>
      </div>



        <div className="row">
        {filteredFilmes.map((filme, index) =>
            <div className="col-md-4 mb-4"
                 key={index}> 
                    <div className ="card"> 
                        <img src={filme.poster} alt={filme.titulo} />
                        <h5 className="card-title">{filme.titulo}<div>{filme.ano}</div> </h5>
                        <div><p>{filme.nota}</p></div>
                        
                        <a href={`/detalhes/:filme${filme.titulo}`}>
                          <div className="btn btn-primary">
                          <ButtonAssistir assistido={filme.assistido}/>
                          </div>
                        </a>
                           
                    </div>
            </div>)}
        </div>
        </div>
    </div> 
  );
}

