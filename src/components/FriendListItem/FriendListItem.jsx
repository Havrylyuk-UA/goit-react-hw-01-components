import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <li className="item-friend">
        <span className={`status-${isOnline ? 'online' : 'offline'}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  );
};

export default FriendListItem;
