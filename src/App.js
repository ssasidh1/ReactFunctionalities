import './App.css';
import { ContextProvider } from './context';
import { ThemeComponent } from './theme';
export default function App() {
  return (
    <ContextProvider>
      <ThemeComponent />
    </ContextProvider>
  );
}

