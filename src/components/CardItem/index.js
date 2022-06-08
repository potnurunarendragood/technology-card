// Write your code here.
import './index.css'

const technologyCardItem = props => {
  const {cardList} = props
  const {title, description, imgUrl} = cardList
  return (
    <div className="totalContainer">
      <li>
        <h1 className="header">{title}</h1>
        <p className="paragraph">{description}</p>
        <div className="imageContainer">
          <img src={imgUrl} className="image" alt="title" />
        </div>
      </li>
    </div>
  )
}

export default technologyCardItem
