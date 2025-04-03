import FlowingWords from './FlowingWords'; // Adjust the path as needed
import '../Styles/Footer.css';

function App  () {
  return (
    <>
      <footer>
        <FlowingWords texts={["Example text 2"]} velocity={-150}/>
      </footer>
    </>
  )
}
export default App;