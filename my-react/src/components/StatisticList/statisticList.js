import PropTypes from 'prop-types'; 
import s from './statisticList.module.css';

export default function StatisticList({ label, percentage }) {
	return (
		<li className={s.Item}>
			<span className={s.Label}>{label}</span>
			<span className={s.Percentage}>{percentage}%</span>
		</li>
	)
}

StatisticList.propTypes = {
	label: PropTypes.string,
	percentage: PropTypes.number,	
}

