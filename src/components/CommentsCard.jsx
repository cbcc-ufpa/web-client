import './CommentsCard.css'

const CommentsCard = ({comment, userName, userJob, userPhoto}) => {
  return (
    <div className="comment_card">
        <p>"{comment}"</p>
        <div className="user_info">
            <div className="user_photo">
                <img src={userPhoto} alt="User Photo" />
            </div>
            <div>
                <h2>{userName}</h2>
                <p>{userJob}</p>
            </div>
        </div>
    </div>
  )
}

export default CommentsCard