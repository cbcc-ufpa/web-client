import './MemberCard.css'

const MemberCard = ({memberPhoto, memberName, memberJob}) => {
  return (
    <div className='member_card'>
        <div className='member_photo'>
            <img src={memberPhoto} alt="Member Photo" />
        </div>
        <h1>{memberName}</h1>
        <p>{memberJob}</p>
    </div>
  )
}

export default MemberCard