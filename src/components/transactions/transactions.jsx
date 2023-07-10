import PropTypes from 'prop-types';
import {
  TransactionUser,
  TransactionUserHead,
  TransactionsUserTb,
  TransactionUserTd,
} from './transaction.styled';

export const TransactionHistory = ({ lists }) => {
  return (
    <TransactionUser>
      <TransactionUserHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionUserHead>
      {lists.map(({ type, id, amount, currency }) => (
        <TransactionsUserTb key={id}>
          <tr>
            <TransactionUserTd>{type}</TransactionUserTd>
            <TransactionUserTd>{amount}</TransactionUserTd>
            <TransactionUserTd>{currency}</TransactionUserTd>
          </tr>
        </TransactionsUserTb>
      ))}
    </TransactionUser>
  );
};

TransactionHistory.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
