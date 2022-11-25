const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        kakaokey: 'dc629edb6c7c6ce0791c0f11c9b5d459',
        signIn:
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo8HpxKm27rkojUDl57ZSffSw0LR-t4p8',
        SECRET: 'mysecretofnextjsnextauth',
      },
    };
  }
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      env: {
        kakaokey: 'dc629edb6c7c6ce0791c0f11c9b5d459',
        signIn: '/auth/signin',
        signUp: '/auth/signup',
        myPage: '/mypage',
        refresh: '/auth/refresh',
        SECRET: 'mysecretofnextjsnextauth',
      },
    };
  }
  return {
    env: {
      kakaokey: 'dc629edb6c7c6ce0791c0f11c9b5d459',
      FIREBASE_API_KEY: 'AIzaSyDo8HpxKm27rkojUDl57ZSffSw0LR-t4p8',
      SECRET: 'mysecretofnextjsnextauth',
    },
  };
};
