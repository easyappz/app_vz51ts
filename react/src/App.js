import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h1>Это приложение номер 2</h1>
          <h2 className="App-subtitle">Красивый подзаголовок</h2>
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
