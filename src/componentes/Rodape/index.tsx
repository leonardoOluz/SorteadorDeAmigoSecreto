import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import './estilos.css';
import { useSorteador } from "../../state/hook/useSorteador";

const Rodape = () => {

  const navegarPara = useNavigate();

  const participantes: string[] = useListaParticipantes();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara('/sorteio');
  };

  return (<footer className="rodape-configuracoes">
    <button
      className="botao"
      disabled={participantes.length < 3}
      onClick={iniciar}
    >Iniciar brincadeira</button>
    <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
  </footer>)
}

export default Rodape;