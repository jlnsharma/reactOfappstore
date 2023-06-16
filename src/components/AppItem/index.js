// Write your code here
import './index.css'

const AppItem = props => {
  const {appItems} = props

  const {appName, imageUrl} = appItems

  return (
    <li className="list-Cont">
      <img className="img" src={imageUrl} alt={appName} />
      <p className="desc">{appName}</p>
    </li>
  )
}

export default AppItem
