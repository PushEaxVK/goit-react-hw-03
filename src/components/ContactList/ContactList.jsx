import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ list }) => {
  return (
    <ul>
      {list.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
