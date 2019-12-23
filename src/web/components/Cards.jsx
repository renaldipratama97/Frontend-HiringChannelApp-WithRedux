import React, { Component } from 'react'
import CardsList from './CardsList'
import Header from './Header'
import DetailPage from './DetailPage'

import { connect } from 'react-redux'

import { fetchEngineers } from '../../public/redux/actions/engineers'

class Cards extends Component {
  
  componentDidMount(){
    this.props.fetch('', 'name', 'ASC', 5)
  }

  render() {
    return (
    <>
      <Header getDataFromHeader={this.search} searchBar={true}/>
      <DetailPage />
      <CardsList/>
    </>
    )
  }
}

const mapStateToProps = state => ({
  engineers: state.engineers
})

const mapDispatchToProps = (dispatch) => ({
  fetch: (search, sortBy, orderBy, limit) => dispatch(fetchEngineers('http://localhost:8080/api/v1/engineer?search='+search+'&page=1&sortBy='+sortBy+'&orderBy='+orderBy+'&limit='+limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)