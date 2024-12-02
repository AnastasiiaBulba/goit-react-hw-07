import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts); // мемоізація

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
