import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import ListaParticipantes from ".";

jest.mock('../../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

describe('Uma Lista vazia de participantes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })

    test('Deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>);

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);
    });
});

describe('Uma Lista preenchida de participantes', () => {
    const participantes = ['Ana', 'Lucca'];

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('Deve conter elementos na lista!', () => {

        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>);

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    });
});