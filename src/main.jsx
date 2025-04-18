import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import App from './App.jsx'
import useStore from './store/index.js'
import { darkTheme, lightTheme } from './theme.js';

const Root = ()=>{
  const mode = useStore(state=> state.mode);
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}


createRoot(document.getElementById('root')).render(<Root />)
