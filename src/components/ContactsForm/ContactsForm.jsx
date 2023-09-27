import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import initialValues from 'utils/initialValues';
import schema from 'utils/validationSchema';

import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
} from './ContactsForm.styled';
import { addContacts } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
import { number } from 'yup';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onformSubmit = value => {
    const nameInContacts = () =>
      contacts.find(
        ({ name }) => name.toLowerCase() === value.name.toLowerCase()
      );
    const renameContact = newName =>
      contacts.find(({ name }) => name.toLowerCase() === newName.toLowerCase());
    if (nameInContacts()) {
      Notiflix.Notify.warning(`${value.name} is already in contacts.`, {
        timeout: 5000,
      });
      Notiflix.Confirm.prompt(
        'Rename a contact',
        'Rename the contact you want to create!',
        '',
        'Answer',
        'Cancel',
        function okCb(newName) {
          const result = renameContact(newName);
          if (!result) {
            dispatch(addContacts({ name: newName, number }));
          } else {
            Notiflix.Notify.warning(
              `What you do? Name : ${newName} already exists !!!. `,
              {
                timeout: 5000,
              }
            );
          }
        }
      );
      return;
    }
    dispatch(addContacts(value));
  };

  const handleSubmit = (value, { resetForm }) => {
    onformSubmit(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormAddContact>
          <Label htmlFor="name">
            Name
            {touched.name && errors.name && <div>{errors.name}</div>}
            <InputField type="text" name="name" placeholder="First Name" />
          </Label>
          <Label htmlFor="number">
            Number
            {touched.number && errors.number && <div>{errors.number}</div>}
            <InputField type="text" name="number" placeholder="Number tel:" />
          </Label>
          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </FormAddContact>
      )}
    </Formik>
  );
};
