import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaParticipanteState, mensagemErro } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipanteState);
  const lista = useRecoilValue(listaParticipanteState);
  const setMensagemErro = useSetRecoilState(mensagemErro);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setMensagemErro('Nomes duplicados não são permitidos!');
      
      setTimeout(() => {
        setMensagemErro('');
      }, 5000)
      
      return
    }
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}