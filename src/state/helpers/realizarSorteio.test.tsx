import realizarSorteio from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {
    test('Cada participantes não sorteie o próprio nome', () => {
        const participantes = [
            'Ana',
            'Beatriz',
            'Carlos',
            'Diego',
            'Eduarda',
            'Fernanda',
            'Gabriel'
        ];

        const sorteio = realizarSorteio(participantes);
        
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })

    })
})