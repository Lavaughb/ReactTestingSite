import './App.css';
import { MantineProvider } from '@mantine/core';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Dashboard />
    </MantineProvider>
  );
}

export default App;
