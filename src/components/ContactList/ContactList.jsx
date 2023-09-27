import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacrtList,
  selectError,
  selectISLoading,
} from 'redux/contacts/selectorsContacts';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsList = useSelector(selectContacrtList);
  const isLoading = useSelector(selectISLoading);
  const error = useSelector(selectError);
  return (
    <ul>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {contactsList.length > 0 &&
        contactsList.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
    </ul>
  );
};
