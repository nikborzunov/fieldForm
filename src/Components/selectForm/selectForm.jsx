import React from "react"
import s from './selectForm.module.css'
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

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#7A5CFA' : 'white' ,
                color: isFocused ? 'white' : '#666666' ,
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        },
    };


    const loadOptions = (searchValue, callback) => {
        const filteredOptions = options.filter((option) =>
            option.label.toLowerCase().includes(searchValue.toLowerCase())
        );
        callback(filteredOptions);
    };
    return (
        <div className={s.selectForm_Wrap}>
            <div className={s.selectForm_Title}>Dropdown title</div>
            <AsyncSelect  styles={colourStyles} defaultValue={options} loadOptions={loadOptions} onChange={handleChange}/>
        </div>
    )
}
export default SelectForm