import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import Rodape from ".";

jest.mock('../../state/hook/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
});

const mockNavigate = jest.fn();
const mockSorteador = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

jest.mock('../../state/hook/useSorteador.ts', () => {
  return {
    useSorteador: () => mockSorteador
  }
})


describe('Quando não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })

  test('A brincadeira não pode ser iniciada', () => {
    render(<RecoilRoot>
      <Rodape />
    </RecoilRoot>)

    const botao = screen.getByRole('button');

    expect(botao).toBeDisabled();

  });

});

describe('Quando existem participantes suficientes', () => {

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(['Ana', 'Lucca', 'Leo'])
  })

  test('A brincadeira pode ser iniciada', () => {
    render(<RecoilRoot>
      <Rodape />
    </RecoilRoot>)

    const botao = screen.getByRole('button');

    expect(botao).not.toBeDisabled();
  });

  test('A brincdeira foi iniciada', () => {
    render(<RecoilRoot>
      <Rodape />
    </RecoilRoot>)

    const botao = screen.getByRole('button');
    fireEvent.click(botao);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
    expect(mockSorteador).toHaveBeenCalledTimes(1);
  });

})