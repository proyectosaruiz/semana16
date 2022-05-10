import "./style.css";
import { UserPicture } from "../UserPicture";
import { UserName } from "../UserName";
import { UserLocation } from "../UserLocation";
import above18 from "../../images/above18.webp";

export const User = ({ userData }) => {
  const { picture, name, location, dob } = userData;

  return (
    <article className="userCard">
      <UserPicture picture={picture} name={name} />
      <UserName name={name} />
      <UserLocation location={location} />
      {dob.age >= 18 && (
        <img className="above18" src={above18} alt="Mayor de edad" />
      )}
    </article>
  );
};
