import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { VitePluginRadar } from 'vite-plugin-radar'
// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
    console.log(process.env.VITE_GOOGLE_TAG)
    return defineConfig({
        plugins: [
            react(),
            TanStackRouterVite(),
            sentryVitePlugin({
                org: 'sp3rzo',
                project: 'arthur-portfolio',
            }),
            VitePluginRadar({
                // Google Analytics tag injection
                analytics: {
                    id: process.env.VITE_GOOGLE_TAG,
                },
            }),
        ],

        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },

        build: {
            sourcemap: true,
        },
    })
}
