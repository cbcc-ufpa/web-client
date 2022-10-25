import "./AreaCard.css"

const AreaCard = ({icon, title, text}) => {
  return (
    <div className="area_card">
        <img src={icon} alt="Icon" />
        <a href="#">{title}</a>
        <p>{text}</p>
    </div>
  )
}

export default AreaCard