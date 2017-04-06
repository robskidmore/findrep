import React, {PropTypes} from 'react'
import './ListItem.scss'

const ListItem = ({result, personIndex, updatePerson}) => {
  const handleClick = (e) => {
    e.preventDefault()
    updatePerson(personIndex)
  }

  return (
    <li className='collection-item list-item'>
      <span>{result.name} - {result.party}</span>
      <span onClick={handleClick} className='view-details'>Details</span>
    </li>
  )
}

ListItem.propTypes = {
  updatePerson: PropTypes.func.isRequired,
  personIndex: PropTypes.number.isRequired,
  result: PropTypes.object.isRequired
}

export default ListItem
