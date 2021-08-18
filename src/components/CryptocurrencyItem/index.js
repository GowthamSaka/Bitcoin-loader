// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props
  const {currencyName, currencyLogo, euroValue, usdValue} = cryptoCurrencyData

  return (
    <li className="coin-items-container">
      <div className="coin-type-card">
        <img src={currencyLogo} className="coin-logo" alt={currencyName} />
        <h1 className="coin-name">{currencyName}</h1>
      </div>
      <div className="dollar-card">
        <p className="dollars">{usdValue}</p>
        <p className="dollars1">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
