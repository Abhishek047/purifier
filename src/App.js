import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline'
import Routes from './routes';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
      <Router>
        <CssBaseline />
        <Routes />
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
