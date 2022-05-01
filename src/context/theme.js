import React, {
  createContext, useMemo,
} from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
  const theme = useMemo(() => ({ color: '#F2F4F6' }))
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
