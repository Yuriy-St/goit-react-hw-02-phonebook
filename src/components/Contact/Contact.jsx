import { StyledContact } from './Contact.styled';

export default function Contact({ name, number }) {
  return (
    <StyledContact>
      <div>{name}:</div>
      <div>{number}</div>
    </StyledContact>
  );
}
