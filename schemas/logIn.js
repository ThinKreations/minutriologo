import * as yup from 'yup'

const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]\d$/;
const cedulaRegex = /^\d{6,8}$/;

export const schemaLogIn = yup.object({
  id: yup.string().required('Campo obligatorio').test('es-curp-o-cedula','CURP o Cédula Inválida', value => curpRegex.test(value || '') || cedulaRegex.test(value || '')),
  password: yup.string().required('Contraseña obligatoria'),
});