import "./UserCard.scss";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={user.picture.large}
        alt={user.name.first}
      />
      <div className="card__content">
        <h2 className="card__heading">
          {user.name.first} {user.name.last}
        </h2>
        <a href={"mailto:" + user.email}>{user.email}</a>
        <a href={"tel:" + user.phone}>{user.phone}</a>
      </div>
    </div>
  );
};

export default UserCard;
