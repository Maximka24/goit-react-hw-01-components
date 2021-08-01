import PropTypes from 'prop-types'; 
import s from './friendsList.module.css';

export default function FriendsList({ avatar, name, isOnline }) {
	const status = state => (state ? s.IsOnline : s.IsOffline);

	return (
		<li className={s.Item}>
			<span className={status(isOnline)}>{isOnline}</span>
			<img className={s.Avatar} src={avatar} alt="Фото друга" width="48" />
			<p className={s.Name}>{name}</p>
		</li>
	)
}

FriendsList.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
}