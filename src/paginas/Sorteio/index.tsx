import { useState } from "react";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import './estilos.css';

const Sorteio = () => {

  const participantes = useListaParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio();

  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  }

  return (
    <section className="sorteio">
      <h2 className="titulo">Quem vai tirar o papelzinho?</h2>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDavez"
          id="participanteDavez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={event => setParticipanteDaVez(event.target.value)}
        >
          <option value="">Selecione o seu nome</option>
          {participantes.map(participante => (<option
            key={participante}
            value={participante}
          >{participante}</option>))}
        </select>
        <p>Clique em sortear para ver quem é seu amigo secreto!</p>
        <button className="botao-sortear">Sortear</button>
      </form>
      {amigoSecreto && <p className="resultado" role="alert">Seu amigo secreto é {amigoSecreto}</p>}
      <footer className="sorteio">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
    </section>
  )
};

export default Sorteio;