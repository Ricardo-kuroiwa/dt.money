import {Container} from './styles';
import IcomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { useTransactions } from '../../hooks/useTransactions';

export function Sunmary(){
  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
  return(
    <Container>  
      <div>
        <header>
          <p>Entradas</p>
          <img src={ IcomeImg } alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits )}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ OutcomeImg } alt="Saídas" />
        </header>
        <strong>
        -
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws )}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={ TotalImg } alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total )}
        </strong>
      </div>
    </Container>
  );
}