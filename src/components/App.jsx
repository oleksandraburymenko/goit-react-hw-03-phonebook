import css from './Phonebook.module.css';
import shortid from 'shortid';
import { ContactForm } from './ContactForm';
import Section from './Section';
import { Component } from 'react';
import { Filter } from './Filter';
import { ContactList } from './ContactList';



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };


componentDidMount() {
  const contacts = localStorage.getItem('contacts')
  if (contacts) {
      this.setState({contacts:JSON.parse(contacts)})
  }
}
componentDidUpdate(prevProps,prevState) {
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}


  filterContact = event => {
    this.setState ({filter: event.target.value});
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number
    };
    
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  }

  deleteContact = id => {
    this.setState(prevContact => ({
      contacts: prevContact.contacts.filter(contact => contact.id !== id)
    }))
  }
  
  normalizedContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
  }

  render () {
    const { filter } = this.state;
    return (
      <div className={css.container}>
        <>
        <Section title="Phonebook">
          <ContactForm onSubmit = { this.formSubmitHandler }/>
        </Section>
        <Section title="Contacts">
          <Filter
          filter={filter}
          filterContact={this.filterContact}
          />
          <ContactList
          contacts={this.normalizedContact()}
          deleteContact={this.deleteContact}
          />
        </Section>
        </>
      </div>
    );
  }

};