import "./AreaCard.css"

const AreaCard = ({icon, title, text}) => {
  return (
    <div className="area_card">
        <img src={icon} alt="Icon" />
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default AreaCard