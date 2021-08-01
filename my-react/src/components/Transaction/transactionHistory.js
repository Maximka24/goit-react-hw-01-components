import TransactionHistoryList from '../TransactionHistoryList/transactionHistoryList';
import s from './transactionHistory.module.css'

export default function TransactionHistory ({items}) {
	return (
		<table className={s.TransactionHistory}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>		
			<tbody>
				{items.map(item => 
					<TransactionHistoryList	
						key={item.id}						
						type = {item.type}
						amount = {item.amount}
						currency = {item.currency}
					/>)	
				}		
			</tbody>
	  </table>
	)
}