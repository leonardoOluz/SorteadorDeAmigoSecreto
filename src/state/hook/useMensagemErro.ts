import { useRecoilValue } from "recoil";
import { mensagemErro } from "../atom";

export const useMensagemErro = () => {
  const mensagem = useRecoilValue(mensagemErro);
  return mensagem;
};