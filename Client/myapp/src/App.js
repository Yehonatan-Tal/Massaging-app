import Login from './Login'
import * as React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

const handleCallbackClick = (id) => {

    setId(id)
};

  return (
      id ? dashboard : <Login handleClick={handleCallbackClick} /> 
  );
}

export default App;
