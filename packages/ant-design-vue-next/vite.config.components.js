import {AntdvNextResolver} from '@antdv-next/auto-import-resolver'
import Components from 'unplugin-vue-components/vite'

export default function createComponentsPlugin() {
    return Components({
        dts: false,
        resolvers: [AntdvNextResolver()]
    })
}
