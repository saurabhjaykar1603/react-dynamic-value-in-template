
import './App.css';

function App() {
  const title = 'welcome to new page';
  const like = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{like}</p>

        <p>{10}</p>
        <p>{`Hello,sj`}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google site</a>
      </div>

    </div>
  );
}

export default App;
