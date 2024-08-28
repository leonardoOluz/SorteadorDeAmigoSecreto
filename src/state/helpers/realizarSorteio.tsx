import shuffle from "just-shuffle";

export default function realizarSorteio (participantes: string[]) {
    
    const totalParticipantes = participantes.length;

    const embaralhado = shuffle(participantes);
    
    const resultado = new Map<string, string>();

    for (let index = 0; index < totalParticipantes; index++) {

        const indiceDoAmigo = totalParticipantes === (index + 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);

    }

    return resultado;

}