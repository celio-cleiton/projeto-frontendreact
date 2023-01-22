import React,{ useState } from "react";
import GlobalStyle  from "./globalStyles";
import Header from "./components/main/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Carrinho from "./components/main/header/carrinho";




function App() {
  const [valorCondicional, setValorCondicional] = useState(1);
  

  const handleMudarTela = (valor) => {
    setValorCondicional(valor);
  };


  const renderizaTela = () => {
    switch (valorCondicional) {
      case 1:
        return <Main handleMudarTela={handleMudarTela}/>;
      case 2:
        return <Carrinho handleMudarTela={handleMudarTela} />;
      case 3:  
        return <Header handleMudarTela={handleMudarTela} />
    }
  };
  
  // useEffect(() => {
  //   setCarrinho([...carrinho, adicionarProdutos])
   
  // },[adicionarProdutos])
  
  return (
    <>
      <GlobalStyle />
      {renderizaTela()}
      <Footer />
    </>
  );
}

export default App;
