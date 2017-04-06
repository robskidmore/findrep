import React, {PropTypes} from 'react'
import './Display.scss'

const Display = ({children}) => {
  return (
    <div className='container display'>
      {children}
    </div>
  )
}

Display.propTypes = {
}

export default Display
