import React from "react";
import { FormatMoney, somaTotalCarrinho } from "../../../../function/function"


function Carrinho(props) {
  const listaDeCompras = props.carrinho.map((produto,index)=>{       
    return (
        <div key={index} >
        <h5>{produto.name} - Qts. {produto.quantidade}
        <button onClick={()=>{props.removerItem(produto)}} >Remover</button></h5>
        <p>{FormatMoney(produto.precoTotal)}</p>
    </div>
    )
})

function handleFinalizaPedido(){ 
    if (listaDeCompras.length ===0) {
        return( alert("Você não tem nem um item, para finalizar!"))
    }else{
        return(
          ( alert("Compra finalizada com sucesso.")),  
          localStorage.clear()
            )
    }   
}

  return (
    <div>
      <h2>Carrinho:</h2>
      {listaDeCompras}
      <h4>O Valor Total é : {somaTotalCarrinho(props.carrinho)}</h4>
      <br />
      <button onClick={() => handleFinalizaPedido()}>Finalizar Compras</button>
    </div>
  );
}

export default Carrinho;


            
