import { atom } from "recoil";

export const listaParticipanteState = atom<string[]>({
  key: 'listaParticipanteState',
  default: []
});

export const mensagemErro = atom<string>({
  key: 'mensagemErro',
  default: ''
});

export const resultadoDoAmigoSecreto = atom<Map<string, string>>({
  key: 'resultadoDoAmigoSecreto',
  default: new Map()
})