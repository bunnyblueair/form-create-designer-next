import formCreate from '@form-create/antdv-next';
import installAntdvComponents from '@form-create/antdv-next/auto-import';

const viewForm = formCreate;
installAntdvComponents(viewForm);

const designerForm = formCreate.factory();
installAntdvComponents(designerForm);

export default viewForm;

export {designerForm};
