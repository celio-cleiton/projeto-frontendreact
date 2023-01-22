import React from "react"
import { CardContainer, Container, StyledButton, StyledImagem } from "./styles";

function CardProdutos({item, listaDeCompra}) {
    function addCarrinho () {
        const produtoCarrinho = {
          id:item.id,
          name:item.name,
          preco:item.price,
          precoTotal: item.price *1,
          quantidade:1
        } 
        listaDeCompra(produtoCarrinho)
      }

   
    return (
        <Container>
            <CardContainer key={item.id}>
            <StyledImagem src={item.imageUrl} alt="imagem dos produtos" />
            <h1>{item.name}</h1>
            <p>{item.type}</p>
            <p>${item.price},00</p>
            <p><StyledButton type="submit" onClick={()=>addCarrinho()}>Adicionar ao Carrinho</StyledButton></p>
        </CardContainer>
        </Container>
    )
}

export default CardProdutos;
