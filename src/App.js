import logo from './logo.svg';
import './App.css';
import avatar from './images/avatar-jessica.jpeg';

function App() {
  return (
    <div className="card">
      <div className="avatar-container">
        <img src={avatar} alt={"Avatar"} className="avatar"></img>
      </div>
      
      <div className="name u-push-top-24 text-preset-1">Jessica Randall</div>
      <div className="location u-push-bottom-24 text-preset-2__bold">London, United Kingdom</div>
      <div className="description u-push-bottom-24 text-preset-2">"Front end developer and avid reader."</div>

      <div className="button-container text-preset-2__bold">
        <button className="button">Github</button>
        <button className="button">Frontend Mentor</button>
        <button className="button">LinkedIn</button>
        <button className="button">Twitter</button>
        <button className="button">Instagram</button>
      </div>
    </div>
  );
}

export default App;
