import React from 'react';
import styles from './Filter.css';
import PropTypes from 'prop-types';
import {CSSTransition } from 'react-transition-group'; 
import { connect } from 'react-redux';
import filterContacts from '../../redux/filter/filterAction';
import contactsSelectors from '../../redux/contacts/contactsSelector';

const Filter = ({ filter, filterContact, contacts }) => {
  return (
    <CSSTransition
      in={contacts.length > 1}
      appear={true}
      timeout={250}
      unmountOnExit
      classNames={styles}
    >
      <div className={styles.container}>
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.input}
            onChange={event => filterContact(event.target.value)}
            value={filter}
          />
        </label>
      </div>
    </CSSTransition>
  );
};

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    filter: state.filter,
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  filterContact: filterContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);