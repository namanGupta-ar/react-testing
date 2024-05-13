import './App.css';
import Button from './Button';
import TestComponent from './Input';
function App() {
  return (
    <div className="App">
      <p>First react test Case</p>
      {/* <input type="text" placeholder="Enter User Name" name="username" id="userId" readOnly value="Naman Gupta" /><br /><br /><br /><br /><br /> */}
      <img
        title="ferrari"
        src=""
        alt='ferrari'
      />
      <TestComponent />
      <Button />
      {/* <img
        title="ferrari"
        src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
      /> */}
    </div>
  );
}

export default App;