import logo from './logo.svg';
import profileImage from './img/capybara.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: pliakhov</h2>
      <img src={profileImage} alt="profile-image"></img>
    </div>
  );
}

export default App;
