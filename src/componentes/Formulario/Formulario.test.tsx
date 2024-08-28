import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from ".";
import { RecoilRoot } from "recoil";

// Jest

describe('O comportamento do formulario tsx', () => {

    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        // garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled()

    })

    test('adicionar participante caso exista um nome preenchido', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        // encontrar o botão
        const botao = screen.getByRole('button');
        // inseri um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        // clicar no botao de submeter
        fireEvent.click(botao);
        // Garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();
        // Garantir que o input não tenha valor
        expect(input).toHaveValue('');

    })

    test('Nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(botao);
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(botao);
        // Pegar a mensagem no alert de erro de duplicidade
        const mensagemDeErro = screen.getByRole('alert');

        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!');
    })

    test('A mensagem de erro deve sumir após o timers', () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(botao);
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(botao);
        // Pegar a mensagem no alert de erro de duplicidade
        let mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeInTheDocument();

        act(() => {
            jest.runAllTimers();
        });


        mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeNull();
    })
})
