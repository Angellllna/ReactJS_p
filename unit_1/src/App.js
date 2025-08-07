import logo from './logo.svg';
import './App.css';
let text = 'test variable';

function App() {
  let text2 = '222'
  return (
      <>
  <div className='container'>
 <h1>app_1</h1>
 <img src="/images/react.png" alt="test" />
 <ul>
  <li>Hello</li>
  <li>{text+text2}</li>
 </ul>
 </div>
  </>
    );
  }
  


export default App;
