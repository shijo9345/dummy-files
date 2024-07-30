import React from 'react'
import PropTypes from "prop-types"
const Array = (props) => {
    const { items } = props;
    return (
        <div div="array">
            <h2>Item List</h2>
            <ul>
                {
                    items.map((item) => (
                        <li>{item.name}</li>
                    ))

                }
            </ul>
        </div>
    )
}
export default Array
Array.propTypes =
{
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        }
        )

    )
}