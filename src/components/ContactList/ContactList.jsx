import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';

export default function ContactList({ contacts }) {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ContactListStyled>
  );
}
