import { namespace } from '../../constants/namespace';
import { transactionSchema, transactionArraySchema } from './schemas';

export const getTransaction = (transactionId) => ({
  type: namespace.GET_TRANSACTION,
  api: {
    path: '/transactions/transaction/' + transactionId,
    method: 'GET',
    schema: transactionSchema,
  }
});

export const createTransaction = (transaction, customerId, onSuccess) => ({
  type: namespace.CREATE_TRANSACTION,
  api: {
    path: '/transactions',
    method: 'POST',
    body: transaction,
    schema: transactionSchema,
    header: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${customerId}`
    },
    onSuccess
  }
});

export const getAllTransactions = (customerId) => ({
  type: namespace.GET_ALL_TRANSACTIONS,
  api: {
    path: '/transactions',
    method: 'GET',
    schema: transactionArraySchema,
    header: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${customerId}`
    }
  }
});
