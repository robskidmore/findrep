import React, {PropTypes} from 'react'
import ListItem from './ListItem'

import './List.scss'

const List = ({data, selectedType, updatePerson}) => {
  return (
    <ul className='list collection'>
      {data.results.map((result, index) => (
        <ListItem
          updatePerson={updatePerson}
          key={index}
          personIndex={index}
          result={result} />
      ))}
    </ul>
  )
}

List.propTypes = {
  selectedPerson: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  updatePerson: PropTypes.func.isRequired
}

export default List
