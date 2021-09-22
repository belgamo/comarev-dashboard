import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import theme from './styles/theme';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Routes />
          <ToastContainer position='top-right' closeOnClick />
        </ThemeProvider>
      </StyledThemeProvider>
    </Provider>
  );
}

export default App;
