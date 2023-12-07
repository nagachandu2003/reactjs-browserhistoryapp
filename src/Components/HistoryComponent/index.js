import './index.css'

const HistoryComponent = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="flexi2">
        <p className="time-part">{timeAccessed}</p>
        <div className="flexi">
          <img className="logo-url" src={logoUrl} alt="domain logo" />
          <div className="flexi2">
            <p>{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onDelete}
        type="button"
        className="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryComponent
