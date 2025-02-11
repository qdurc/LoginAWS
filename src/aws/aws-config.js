import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1', 
    userPoolId: 'us-east-1_piFTFbh4H',
    userPoolWebClientId: '4o1pmdukkal3qq4krk59q84rde', 
    oauth: {
      domain: 'https://us-east-1piftfbh4h.auth.us-east-1.amazoncognito.com', 
      scope: ['email', 'openid'],
      redirectSignIn: 'http://localhost:5173/',
      redirectSignOut: 'http://localhost:8080/',
      responseType: 'code',
    },
  },
  platform: 'WEB', 
});
