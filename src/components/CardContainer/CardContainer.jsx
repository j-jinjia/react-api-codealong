import UserCard from "../UserCard/UserCard";
import "./CardContainer.scss";

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((user) => {
        return (
          <UserCard
            key={user.registered.date}
            userName={`${user.name.first} ${user.name.last}`}
            userImage={user.picture.large}
            userEmail={user.email}
            userPhoneNumber={user.phone}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
