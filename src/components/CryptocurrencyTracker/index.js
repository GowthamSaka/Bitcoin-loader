import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: false,
  }

  renderBodyCoins = () => (
    <div className="currency-body-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="Cryptocurrency Tracker"
        className="dollar-image"
      />
      <CryptocurrenciesList />
    </div>
  )

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="currency-bg-container">
        {isLoading ? this.renderLoader() : this.renderBodyCoins()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
