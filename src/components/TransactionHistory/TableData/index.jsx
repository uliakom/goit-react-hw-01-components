import PropTypes from 'prop-types';
import { TableBody } from './TableData.styled';

const TableData = ({ data }) => {
  return (
    <TableBody>
      {data.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type.toUpperCase()}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </TableBody>
  );
};

export default TableData;

TableData.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
