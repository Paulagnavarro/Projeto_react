import { useState, useEffect } from "react";
import Title from "../Title/index";
import "./detalhe.css";
import Comment from "../comment/index";

function ButtonAssistir(props) {
  const { assistido } = props;
  if (assistido) {
    return <div className="btn btn-primary">Assistir Novamente</div>;
  } else {
    return <div className="btn btn-primary">Assistir</div>;
  }
}

const Detalhe = (props) => {
  const [DetalheFilme, setDetalheFilme] = useState({});
  const [CarregaDetalhe, setCarregaDetalhe] = useState(true);
  const [ErroDetalhe, setErroDetalhe] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDetalheFilme() {
      setIsLoading(true);
      setCarregaDetalhe(true);
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${props.movie}`
        );
        const json = await response.json();

        if (Object.keys(json).length === 0) {
          setErroDetalhe("Não foi possível encontrar os detalhes do filme");
        } else {
          setDetalheFilme(json);
        }
        setCarregaDetalhe(false);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setErroDetalhe({ error });
        setIsLoading(false);
      }
    }

    fetchDetalheFilme();
  }, [props.movie]);

  return (
    <div>
      <Title title={"Detalhes do Filme"} />
      {isLoading && <h1>Carregando...</h1>}
      {CarregaDetalhe ? (
        <h1>Um momento, estamos carregando a página...</h1>
      ) : ErroDetalhe ? (
        <h1>{ErroDetalhe}</h1>
      ) : (
        <div className="cards-container">
          <div className="card-1" style={{ width: "50%" }}>
            <img
              className="rounded-lg w-full"
              src={DetalheFilme.poster}
              alt={`Poster for ${DetalheFilme.titulo}`}
            />
          </div>
          <div className="card-2" style={{ width: "50%" }}>
            <h1 className="text-4xl font-bold mb-4">{DetalheFilme.titulo}</h1>
            <p className="text-gray-600">{DetalheFilme.ano}</p>
            <p className="text-gray-600">{DetalheFilme.sinopse}</p>
            <p>{DetalheFilme.nota}</p>
            <div className="btn btn-primary">
              <ButtonAssistir assistido={DetalheFilme.assistido} />
            </div>
            <Comment />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detalhe;