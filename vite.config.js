import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {"REACT_APP_API_KEY":"28db8bf9dee14c9d8f267f094014aa5d"}
  }
})
