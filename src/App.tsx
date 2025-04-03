import './App.css'
import HeaderComponent from './assets/Component/HeaderComponent'
import FooterComponent from './assets/Component/FooterComponent'
import CardComponent from './assets/Component/CardComponent'
  

function App() {
  

  return (
    <>
    
      <HeaderComponent />
      <div className="container">
        <div className="player">VideoPlayer</div>
        <div className="big-title">BigTitle</div>
        <div className="socials">Socials</div>
        <div className="vision">Vision</div>
        <div className="cards">
          <CardComponent className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            Prova card
          </CardComponent>
        </div>
        <div className="contacts">Contacts</div>
      </div>
      
    <FooterComponent/>
    </>
  )
}

export default App
