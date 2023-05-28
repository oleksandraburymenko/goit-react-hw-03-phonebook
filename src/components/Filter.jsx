import { Component } from "react";
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
    render () {
        return (
            <>
            <p className={css.filter_text}>
                Find contacts by name
            </p>
            <input
            type="text"
            name="filter"
            className={css.filter_input}
            value={this.props.filter}
            onChange={this.props.filterContact}
            ></input>
            </>
        )
    }
}


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterContact: PropTypes.func.isRequired,
}