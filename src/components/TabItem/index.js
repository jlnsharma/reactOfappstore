// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItems, onchangeTabItems, isActive} = props
  const {displayText, tabId} = tabItems
  console.log(isActive)
  const changeTabItems = () => {
    onchangeTabItems(tabId)
  }
  const buttEle = isActive ? 'active-butt' : ''

  return (
    <li>
      <button
        onClick={changeTabItems}
        className={`butt ${buttEle}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
