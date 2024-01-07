import { LevelCreator } from './components/level-creator';
import AlertComponent from './context/alert-component';
import { AlertProvider } from './context/alert-provider';
import './index.css';

function App() {
  return (
    <AlertProvider>
      <AlertComponent />
      <LevelCreator />
    </AlertProvider>
  );
}

export default App;
