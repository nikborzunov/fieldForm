import React from "react"
// import s from './UsersSelectFilter.module.css'
import AsyncSelect from 'react-select/async'

const SelectForm = props => {

    const options = [
        { value: 'Dropdown option', label: 'Dropdown option' },
        { value: 'Dropdown option 1', label: 'Dropdown option 1' },
        { value: 'Dropdown option 2', label: 'Dropdown option 2' }
    ]
    const handleChange = (selectedOption) => {
        props.addOptions(selectedOption);
    };


    const loadOptions = (searchValue, callback) => {
        const filteredOptions = options.filter((option) =>
            option.label.toLowerCase().includes(searchValue.toLowerCase())
        );
        callback(filteredOptions);
    };
    return (
        <div>
            <div>Dropdown title</div>
            <AsyncSelect loadOptions={loadOptions} onChange={handleChange}/>
        </div>
    )
}
export default SelectForm