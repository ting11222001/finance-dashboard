import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { useMemo } from "react"
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "@/scenes/navbar"
import Dashboard from "@/scenes/dashboard"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/predictions" element={<div>prediction page</div>}></Route>
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
