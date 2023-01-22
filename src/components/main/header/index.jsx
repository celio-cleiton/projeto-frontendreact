import React from "react";
import { somaTotalCarrinho } from "../../../function/function";
import {
  StyledHeader,
  StyledInput,
  StyledLi,
  StyledNavbar,
  StyledUl,
  StyledA,
  StyledSelect,
  StyledInputs,
} from "./styles";

function Header(props) {
  const onChangeOrdem = (event) => {
    props.setOrdem(event.target.value);
  };

  const handleNomeSearch = (event) => {
    props.setPesquisa(event.target.value);
  };

  const handlePrecoMin = (event) => {
    props.setValorMinimo(event.target.value);
  };

  const handlePrecoMax = (event) => {
    props.setValorMaximo(event.target.value);
  };

  function limparFiltros() {
    props.setPesquisa("");
    props.setValorMinimo("");
    props.setValorMaximo("");
    props.setOrdem("none");
  }

  return (
    <StyledHeader>
      <StyledNavbar>
        <StyledUl>
          <StyledLi>
            <StyledA href="#logo">
              <img src="src\assets\react.svg" alt="logo" />
              <h3>Loja Astro Dev</h3>
            </StyledA>
          </StyledLi>
          <StyledSelect value={props.ordem} onChange={onChangeOrdem}>
            <option value="none">Ordenar por</option>
            <option value="crescente">Preço: do Menor para o Maior</option>
            <option value="decrecente">Preço: do Maior para o Menor</option>
          </StyledSelect>
          <StyledInputs>
            <p>Menor Preço:</p>
            <input
              type="number"
              value={props.ValorMinimo}
              onChange={handlePrecoMin}
              placeholder="$ 100"
            />
            <p>Maior Preço:</p>
            <input
              type="number"
              value={props.ValorMaximo}
              onChange={handlePrecoMax}
              placeholder="$ 1000"
            />
            <button
              onClick={() => {
                limparFiltros();
              }}
            >
              Limpar Pesquisas
            </button>
          </StyledInputs>
          <StyledInput
            type="text"
            value={props.pesquisa}
            onChange={handleNomeSearch}
            placeholder="Pesquisar por Nome"
          />
          <div onClick={() => props.handleMudarTela(2)}>
            Carrinho
            <div className="sub">
              O valor Total é: {somaTotalCarrinho(props.carrinho)}
            </div>
          </div>
        </StyledUl>
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;
