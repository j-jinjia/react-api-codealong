import ProfileCard from "../ProfileCard/ProfileCard";
import "./CardContainer.scss";

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((user) => {
        return (
          <ProfileCard
            key={user.registered.date}
            name={`${user.name.first} ${user.name.last}`}
            image={user.picture.large}
            email={user.email}
            phoneNumber={user.phone}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
