import { useParams } from 'react-router-dom';
import Detalhe from './../components/Detalhe/detalhe';

const Detalhes = () => {
  const { id } = useParams();
  return <Detalhe movie={id} />;
};

export default Detalhes;
