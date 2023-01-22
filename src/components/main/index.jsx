import React from "react";
import produto from "../../produtos/produtos.json"
import { useState, useEffect } from "react";
import { Container, StyledCarrinho } from "./styled";
import CardProdutos from "../cardprodutos";
import Header from "./header";
import Carrinho from "./header/carrinho";


function Main(props) {
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("none")
  const [carrinho, setCarrinho] = useState([])

  function listaDeCompra (objeto) {
    for (const item of carrinho) {
      if (item.id===objeto.id) {
        objeto.quantidade+=item.quantidade
        objeto.precoTotal+=item.precoTotal
      }
    }
    const novoCarrinho = carrinho.filter((item)=>{
      return item.id!==objeto.id
    })
    novoCarrinho.unshift(objeto)
    setCarrinho(novoCarrinho)
    console.log(objeto);
   }
   useEffect(() => {
    if (carrinho.length > 0) {
      const carrinhoString = JSON.stringify(carrinho);
      localStorage.setItem('carrinho', carrinhoString)
    }   
  }, [carrinho]);
  
  useEffect(() => {
    const carrinhoBuscar = localStorage.getItem('carrinho')
    const carrinhoArray = JSON.parse(carrinhoBuscar);
    if (carrinhoArray) {
      setCarrinho(carrinhoArray);
    }
  }, []);
  const removerItem = (objeto)=>{
    const novoCarrinho = carrinho.filter((item)=>{
      return item.id!==objeto.id
    })
    setCarrinho(novoCarrinho)
   }

   
 const sortMethods = {
  none: { method: (a, b) => (a.id - b.id) },
  crescente: { method: (a, b) => (a.price > b.price ? 1 : -1) },
  decrecente: {
    method: (a, b) => (a.price > b.price ? -1 : 1)
  }
};

  const listaProdutos = produto
  .sort(sortMethods[ordem].method)
  .filter((produto)=>{
    return produto.name.toLowerCase().includes(pesquisa.toLowerCase())
  })
  .filter((produto) => produto.price >= valorMinimo)
  .filter((produto) => {return valorMaximo ? produto.price <= valorMaximo:produto})
  .map((item) => {
    return (
      <CardProdutos
        key={item.id}
        listaDeCompra={listaDeCompra}
        item={item}
      />
    )
  }
  )
  return (
    <>
    <Header 
    pesquisa={pesquisa}
    setPesquisa={setPesquisa}
    ValorMinimo={valorMinimo}
    setValorMinimo={setValorMinimo}
    ValorMaximo={valorMaximo}
    setValorMaximo={setValorMaximo}
    ordem={ordem}
    setOrdem={setOrdem}
    carrinho={carrinho}
    />
      <Container>
        {listaProdutos}
        <StyledCarrinho>
        <Carrinho 
      carrinho={carrinho}
      setCarrinho={setCarrinho}
      removerItem={removerItem}
      />
        </StyledCarrinho>
      </Container>
    </>
  );
}

export default Main;
