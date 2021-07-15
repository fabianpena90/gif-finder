import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCategories}) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(value.trim().length > 0) {
            setCategories(cats => [value, ...cats ]) // callback function to get access to the component where is copying the arr
            setValue('')
        }

        !value && alert('Please type something!')

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                value={value}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
