import { Sunmary } from '../Sunmary';
import { TransactionTable } from '../TransationTable';
import {Container} from './styles';

export function Dashboard(){
  return(
    <Container>
      <Sunmary/>
      <TransactionTable/>
    </Container>
  );
}