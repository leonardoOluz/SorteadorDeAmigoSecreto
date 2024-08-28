import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configuracao from "."

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('A pagina de configuração', () => {
  test('Deve ser renderizado corretamente', () => {
    const { container } = render(<RecoilRoot>
      <Configuracao />
    </RecoilRoot>)
    expect(container).toMatchSnapshot();
  })
})