/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PUBLIC_PATH: string
  readonly VITE_BUILD_GZIP: string
  readonly VITE_DEV_TOOL: string
  readonly VITE_REQUEST_BASE_URL: string
  readonly VITE_REQUEST_BASE_URL_PROXY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
