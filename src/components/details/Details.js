import React, {PropTypes} from 'react'
import './Details.scss'

const Details = ({data}) => {
  return (
    <div className='details'>
      <p>Name: {data.name}</p>
      <p>Office: {data.office}</p>
      <p>Phone: {data.phone}</p>
    </div>
  )
}

Details.propTypes = {
}

export default Details
