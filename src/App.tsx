import { LevelCreator } from './components/level-creator';
import AlertComponent from './context/alert-component';
import { AlertProvider } from './context/alert-provider';
import './index.css';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <RecoilRoot>
      <AlertProvider>
        <AlertComponent />
        <LevelCreator />
      </AlertProvider>
    </RecoilRoot>

  );
}

export default App;
