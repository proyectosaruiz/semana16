import "./style.css";
import { User } from "../User";

export const UsersList = ({ users }) => {
  return (
    <ul className="usersList">
      {users.map((userObject) => {
        return (
          <li key={userObject.login.uuid}>
            <User userData={userObject} />
          </li>
        );
      })}
    </ul>
  );
};
