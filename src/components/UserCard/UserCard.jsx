import "./UserCard.scss";

const UserCard = ({ userName, userImage, userEmail, userPhoneNumber }) => {
  return (
    <div className="card">
      <img className="card__image" src={userImage} alt={userName} />
      <div className="card__content">
        <h2 className="card__heading">{userName}</h2>
        <a href={"mailto:" + userEmail}>{userEmail}</a>
        <a href={"tel:" + userPhoneNumber}>{userPhoneNumber}</a>
      </div>
    </div>
  );
};

export default UserCard;
