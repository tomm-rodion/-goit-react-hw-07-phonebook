import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required(),
  number: yup
    .string()
    .min(2, <em>Too Short!</em>)
    .max(15, <em>Too Long!</em>)
    .matches(phoneRegExp, <em>Phone number is not valid</em>)
    .required(),
});

export default schema;
