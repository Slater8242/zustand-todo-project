const createThemeSlice = (set, get)=> ({
  mode: 'light',
  toggleTheme: ()=> {
    const current = get().mode;
    set({mode: current === 'light' ? 'dark' : 'light'})
  }
})

export default createThemeSlice;