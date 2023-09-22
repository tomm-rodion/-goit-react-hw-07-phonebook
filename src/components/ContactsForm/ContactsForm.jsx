import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import getContacts from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contactsSlice';
import initialValues from 'utils/initialValues';
import schema from 'utils/validationSchema';

import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
} from './ContactsForm.styled';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onformSubmit = value => {
    const nameInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );
    //перевірка існуючого кантакта в телефоній книжці.
    if (nameInContacts) {
      alert(`${value.name} is already in contacts.`);
      return;
    }
    // // створення нового контакта
    dispatch(addContact(value));
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
