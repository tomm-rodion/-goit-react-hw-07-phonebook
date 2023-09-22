import { ContactList } from './ContactList/ContactList';
import { ContactsFilter } from './ContactsFilter/CotactsFilter';
import { ContactsForm } from './ContactsForm/ContactsForm';
import {
  Wrapper,
  Container,
  TitlePhoneBook,
  TitleContacts,
} from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactsForm />
      </Container>
      <Container>
        <TitleContacts>Contacts</TitleContacts>
        <ContactsFilter />
        <ContactList />
      </Container>
    </Wrapper>
  );
};
