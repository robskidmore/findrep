import React from 'react'
import { render } from 'react-dom'

import Main from './components/Main'
import Form from './components/form/Form'
import Display from './components/display/Display'
import List from './components/list/List'
import Details from './components/details/Details'

import fetch from './utils/api'

import { isEmpty } from './utils/helpers'

import './client.scss'

class Client extends React.Component {
  state = {
    selectedType: '',
    selectedState: '',
    selectedPerson: 0,
    data: []
  }

  getData = () => {
    fetch(this.state.selectedType, this.state.selectedState)
      .then((data) => {
        this.setState({
          data
        })
      })
  }

  updateType = (selectedType) => {
    this.setState({
      selectedType
    })
  }

  updateState = (selectedState) => {
    this.setState({
      selectedState
    })
  }

  updatePerson = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  render() {
    return (
      <Main>
        <Form
          selectedType={this.state.selectedType}
          selectedState={this.state.selectedState}
          updateState={this.updateState}
          updateType={this.updateType}
          getData={this.getData} />
        {!isEmpty(this.state.data) &&
          <Display>
            <List
              selectedPerson={this.state.selectedPerson}
              updatePerson={this.updatePerson}
              data={this.state.data} />
            <Details
              data={this.state.data.results[this.state.selectedPerson]} />
          </Display>
        }
      </Main>
    )
  }

}

render(<Client />, document.getElementById('react-root'))
