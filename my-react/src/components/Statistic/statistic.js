import React from 'react';
import PropTypes from 'prop-types';
import StatisticList from '../StatisticList/statisticList';
import s from "./statistic.module.css";

export default function Statistic ({items, title}) {
	return (
		<section className={s.Statistics}>			
			
			{title && <h2 className={s.Title}>{title}</h2>}

			<ul className={s.StatList}>
				{items.map(item => 
					<StatisticList	
						key={item.id}						
						label = {item.label}
						percentage = {item.percentage}
					/>)	
				}
			</ul>		
		</section>
	)
}

Statistic.defaultProps = {
    title: '',
};

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
		PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
	).isRequired,
};


