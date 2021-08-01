import PropTypes from 'prop-types'; 
import s from './profile.module.css'

export default function Profile({avatar, name, tag, location, stats }) {
	return (
		<div className={s.Profile}>
			<div className={s.Description}>
				<img
				src={avatar}
				alt="Аватар пользователя не под	грузился"
				className={s.Avatar}
				width="220"
				/>
				<p className={s.Name}>{name}</p>
				<p className={s.Tag}>{tag}</p>
				<p className={s.Location}>{location}</p>
			</div>

			<ul className={s.Stats}>
				<li>
					<span className={s.Label}>Followers</span>
					<span className={s.Quantity}>{stats.followers}</span>
				</li>
				<li>
					<span className={s.Label}>Views</span>
					<span className={s.Quantity}>{stats.views}</span>
				</li>
				<li>
					<span className={s.Label}>Likes</span>
					<span className={s.Quantity}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	)
}

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		requiredProperty: PropTypes.number}).isRequired, 
}
