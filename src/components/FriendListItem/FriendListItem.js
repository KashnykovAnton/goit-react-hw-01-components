import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, status }) {
  return (
    // console.log(typeof key),
    <li className="item">
      {status ? (
        <span className="status Online"></span>
      ) : (
        <span className="status Offline"></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  // key: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
