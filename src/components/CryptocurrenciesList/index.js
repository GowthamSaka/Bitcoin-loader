// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptoCurrenciesList extends Component {
  state = {
    coinsList: [],
  }

  componentDidMount() {
    this.getCoinTypesList()
  }

  getCoinTypesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
    }))
    this.setState({coinsList: updatedData})
  }

  render() {
    const {coinsList} = this.state
    return (
      <div className="coin-type-container">
        <nav className="nav-container">
          <p className="nav-heading">Coin Type</p>
          <div className="nav-headers-card">
            <p className="nav-element">USD</p>
            <p className="nav-element">EURO</p>
          </div>
        </nav>
        <ul className="coin-type-container-list">
          {coinsList.map(eachCoinType => (
            <CryptocurrencyItem
              key={eachCoinType.id}
              cryptoCurrencyData={eachCoinType}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptoCurrenciesList
