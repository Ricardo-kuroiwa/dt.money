import React,{useState} from 'react';

import './App.css';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalSytle } from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
    <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal }/>
    <Dashboard/>
    <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose = { handleCloseNewTransactionModal }
      />
    <GlobalSytle/>
    </>
  );
}

