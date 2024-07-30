// /src/main.tsx

import ReactDOM from 'react-dom/client'
// import { RouterProvider, createRouter } from '@tanstack/react-router'
// import { routeTree } from './routeTree.gen'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { StrictMode } from 'react'
import App from './App'
import { ThemeProvider } from './components/themeProvider'

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <>
            <StrictMode>
                <ThemeProvider defaultTheme="dark">
                    <App />
                </ThemeProvider>
            </StrictMode>
        </>
    )
}
