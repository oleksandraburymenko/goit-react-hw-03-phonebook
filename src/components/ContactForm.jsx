import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    reset = () => {
        this.setState ({ name: '', number: '' })
    }

    render () {
        return (
            <form className={css.form }onSubmit={this.handleSubmit}>
                <label htmlFor='name' className={css.form_label}>
                Name
                </label>
                <input
                type="text"
                name="name"
                id = 'name'
                value={this.state.name}
                className={css.form_input}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <label htmlFor='number' className={css.form_label}>
                Number
                </label>
                <input
                type="tel"
                name="number"
                id='number'
                value={this.state.number}
                className={css.form_input}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
                <input type="submit" className={css.btn} value='Add contact'/>
            </form>
        )
    }
}