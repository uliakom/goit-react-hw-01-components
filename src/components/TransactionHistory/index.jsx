import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableBody,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type.toUpperCase()}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
