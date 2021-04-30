import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from './shared/Title';
import Loader from './shared/Loader';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import contactsOperations from './redux/contacts/contactsOperation';
import contactsSelectors from './redux/contacts/contactsSelector';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Title title="phonebook" />
        <Form />
        {this.props.isLoading && <Loader />}
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);