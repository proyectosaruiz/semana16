export const UserPicture = ({ picture, name }) => {
  return <img src={picture.large} alt={name.first} />;
};
