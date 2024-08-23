import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useMainContract } from './hooks/useMainContract';
import { useTonConnect } from './hooks/useTonConnect';
import { fromNano } from 'ton-core';
import WebApp from '@twa-dev/sdk';

// EQDG2c2wOFLl2u_MnFla2abWiNsi9_X_Es-N7kcx_GVdH4f5

function App() {
  const {
    contract_address,
    counter_value,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest
  } = useMainContract();

  const { connected } = useTonConnect();

  const showAlert = () => {
    WebApp.showAlert("Hey there!");
  }

  return (
    <div className='App'>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>{WebApp.platform}</b>
          <b>Our contract Address</b>
          <div className='Hint'>{contract_address}</div>
          {contract_balance && (
            <><b>Our contract Balance</b><div className='Hint'>{fromNano(contract_balance)} TON</div></>
          )}
        </div>
        <div className='Card'>
          <b>Counter value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>
        <a onClick={() => {
            showAlert()
          }}>Show TG Alert</a>
        <br />

        {connected && (
          <a onClick={() => {
            sendIncrement()
          }}>Increment by 5</a>
        )}

        <br />

        {connected && (
          <a onClick={() => {
            sendDeposit()
          }}>Request deposit of 1 TON</a>
        )}

        <br />

        {connected && (
          <a onClick={() => {
            sendWithdrawalRequest()
          }}>Request withdrawal of 0.7 TON</a>
        )}
      </div>
    </div>
  )
}

export default App
