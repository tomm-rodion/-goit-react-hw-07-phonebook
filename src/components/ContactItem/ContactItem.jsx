import { useDispatch } from 'react-redux';
import {
  ItemContact,
  ButtonDeleteContact,
  ItemSpan,
} from './ContactItem.styled';
import { deleteContactsById } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ItemContact>
      <ItemSpan>
        {name} : {number}
      </ItemSpan>
      <ButtonDeleteContact
        type="button"
        onClick={() => dispatch(deleteContactsById(id))}
      >
        Delete contact
      </ButtonDeleteContact>
    </ItemContact>
  );
};
