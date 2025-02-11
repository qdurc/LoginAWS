import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './main'
import './index.css'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authenticator>
      <Main/>
    </Authenticator>
  </React.StrictMode>
)
