import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import RemixRouter from 'vite-plugin-remix-router'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const envDir = resolve(__dirname, '../')
    const env = loadEnv(mode, envDir, '')
    return {
        envDir,
        plugins: [react(), RemixRouter()],
        server: {
            proxy: {
                '/api': {
                    target: `http://${env.VITE_API_HOST}:${env.VITE_API_PORT}/`,
                    changeOrigin: true,
                    secure: false,
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
    }
})
