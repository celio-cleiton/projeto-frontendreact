import { StyledFilter, StyledButton } from "./styled"



function Filters (props) {
    const onChangeOrdem = (event) => {
        props.setOrdem(event.target.value)
      }

    const handleNomeSearch = (event)=>{
        props.setPesquisa(event.target.value)
    }

    const handlePrecoMin = (event)=>{
        props.setValorMinimo(event.target.value)
    }

    const handlePrecoMax = (event)=>{
        props.setValorMaximo(event.target.value)
    }
    
    function limparFiltros () {
      props.setPesquisa("")
      props.setValorMinimo("")
      props.setValorMaximo("")
      props.setOrdem("none")
      
    }

    return(
        <StyledFilter>
        <h2>Filtrar por:</h2>
        <div>
        <select value={props.ordem} onChange={onChangeOrdem} >
          <option value="none">Ordenar por</option>
          <option value="crescente">Preço: do maior para o menor</option>
          <option value="decrecente">Preço: do menor para o maior</option>
        </select>
      </div>
        <p>Busca por nome:</p>
        <input type="text" value={props.pesquisa} onChange={handleNomeSearch} placeholder="Produto"/>
        <p>Menor Preço:</p>
        <input type="number" value={props.ValorMinimo} onChange={handlePrecoMin} placeholder="$ 100"/>
        <p>Maior Preço:</p>
        <input type="number" value={props.ValorMaximo} onChange={handlePrecoMax} placeholder="$ 10000" />
        <StyledButton>
          <button onClick={()=>{limparFiltros()}} >Limpar Filtros</button>  
        </StyledButton>
        
        </StyledFilter>
    )
}
 export default Filters;

 