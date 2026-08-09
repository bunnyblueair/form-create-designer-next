import formCreate from '@form-create/antdv-next';
import installAntdvComponents from '@form-create/antdv-next/auto-import';

function installLocalAntdvComponents(targetForm) {
    const app = {
        component(name, component) {
            if (component === undefined) {
                return targetForm.component(name);
            }
            targetForm.component(name, component);
            return app;
        },
        use(plugin, ...options) {
            const install = plugin && (plugin.install || (typeof plugin === 'function' ? plugin : undefined));
            if (install) {
                install.call(plugin, app, ...options);
            }
            return app;
        }
    };

    // 动态规则由 FormCreate 自己解析，组件必须进入它的局部组件表。
    installAntdvComponents({
        useApp(install) {
            install(targetForm, app);
        }
    });
}

const viewForm = formCreate;
installLocalAntdvComponents(viewForm);

const designerForm = formCreate.factory();
installLocalAntdvComponents(designerForm);

export default viewForm;

export {designerForm};
