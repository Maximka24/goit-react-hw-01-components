import PropTypes from 'prop-types'; 
import './transactionHistoryList.module.css'

export default function TransactionHistoryList({ type, amount, currency }) {
	return (
		<tr>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
    	</tr>
	)
}

TransactionHistoryList.propTypes = {
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,	
}
