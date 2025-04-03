import FlowingWords from './FlowingWords'; // Adjust the path as needed
import '../Styles/Footer.css';

function App  () {
  return (
    <>
      <footer>
        <FlowingWords texts={["Footer 1", "Footer 2", "Footer 3", "Footer 4"]} velocity={-150}/>
      </footer>
    </>
  )
}
export default App;