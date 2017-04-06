import React, {PropTypes} from 'react'
import states from '../../data/states'

import './Form.scss'

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.getData()
  }

  const handleTypeChange = (e) => {
    props.updateType(e.target.value)
  }

  const handleStateChange = (e) => {
    props.updateState(e.target.value)
  }

  return (
    <div className='form'>
      <div className='container'>
        <h1>Rep Finder</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-field col s12'>
            <select onChange={handleStateChange} id='select-state' name='select-state' type='select'>
              <option value=''>Select...</option>
              {states.map((state, index) => (
                <option key={index} value={state.abbreviation}>{state.name}</option>
              ))}
            </select>
          </div>
          <p>
            <input id='rep-radio' className='with-gap' onChange={handleTypeChange} type='radio' name='type' value='representatives' />
            <label htmlFor='rep-radio'>Representatives</label>
          </p>
          <p>
            <input id='sen-radio' className='with-gap' onChange={handleTypeChange} type='radio' name='type' value='senators' />
            <label htmlFor='sen-radio'>Senators</label>
          </p>
          <button disabled={!props.selectedState || !props.selectedType} className='waves-light waves-effect btn'>Search</button>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  selectedType: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired
}

export default Form
