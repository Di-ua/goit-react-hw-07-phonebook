import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import styles from './ContactsList.css';
import contactsSelectors from '../../redux/contacts/contactsSelector';
import PropTypes from 'prop-types';


const ContactsList = ({ searchContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {searchContact.map(({ id, name, number }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={styles}>
            <ContactsListItem id={id}></ContactsListItem>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

ContactsList.propTypes = {
  searchContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return {
    searchContact: filteredContacts,
  };
};
export default connect(mapStateToProps)(ContactsList);