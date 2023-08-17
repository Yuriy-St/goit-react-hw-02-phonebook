import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';

export default function ContactList({ contacts, filter = '' }) {
  const filterNormalized = filter.toLowerCase();
  const selected = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterNormalized)
      )
    : contacts;
  return (
    <ContactListStyled>
      {selected.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ContactListStyled>
  );
}
