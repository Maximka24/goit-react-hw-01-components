import FriendsList from '../FriendsList/friendsList';
import s from './friends.module.css';

export default function Friends ({items}) {
	return (
		<ul className={s.FriendList}>
				{items.map(item => 
					<FriendsList	
						key={item.id}						
						avatar = {item.avatar}
						name = {item.name}
						isOnline = {item.isOnline}
					/>)	
				}
		</ul>
	)
}