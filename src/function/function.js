export function FormatMoney(num) {
    return Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(num);
  }
export const somaTotalCarrinho = (carrinho) => {
    let soma = 0
    for (const item of carrinho) {
        soma += item.precoTotal        
    }
    return FormatMoney(soma)
}