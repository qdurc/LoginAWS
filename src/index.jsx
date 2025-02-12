import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './main'
import './index.css'
import { AuthProvider } from "react-oidc-context";
import { cognitoAuthConfig } from './aws/aws-config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <Main/>
    </AuthProvider>
  </React.StrictMode>
)
