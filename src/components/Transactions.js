import React from "react";
import PropTypes from 'prop-types';

export default class Transactions extends React.Component {
	static propTypes = {
		transactions: PropTypes.arrayOf(PropTypes.shape({
			formatted_amount: PropTypes.string.isRequired,
			formatted_date: PropTypes.string.isRequired,
			card_last_four: PropTypes.string.isRequired
		}))
	};

	createRow(transaction) {
		return (
			<tr key={ transaction.date + transaction.card_last_four }>
				<td>{ transaction.formatted_amount }</td>
				<td>{ transaction.formatted_date }</td>
				<td>{ transaction.card_last_four }</td>
			</tr>
		);
	}

	render() {
		const transactions_list = this.props.transactions.map(this.createRow);

		return (
			<table border="1" cellPadding="5" className="transactions-table">
				<thead>
				<tr>
					<th>Amount</th>
					<th>Date</th>
					<th>Card Last Four</th>
				</tr>
				</thead>
				<tbody>
				{ transactions_list.length > 0 ?
					transactions_list :
					<tr><td colSpan="3">No results found</td></tr> }
				</tbody>
			</table>
		);
	}
}
