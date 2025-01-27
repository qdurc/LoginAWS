import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './main'
import './index.css'
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_HCe2dkV6o",
  client_id: "idjs9aml6ntbdu0blt7pd5100",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
  response_type: "code",
  scope: "phone openid email",
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <Main/>
    </AuthProvider>
  </React.StrictMode>,
)
