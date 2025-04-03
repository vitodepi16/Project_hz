import './App.css'
import HeaderComponent from './assets/Component/HeaderComponent'
import FooterComponent from './assets/Component/FooterComponent'
import CardComponent from './assets/Component/CardComponent'

  

function App() {
  

  return (
    <>
    
      <HeaderComponent />
      <div className="container">
        <CardComponent className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          Prova card
        </CardComponent>
      </div>
      
    <FooterComponent/>
    </>
  )
}

export default App
