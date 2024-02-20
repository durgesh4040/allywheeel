const prod = {
  url: {
    API_BASE_URL: "https://mybeapp.herokuapp.com",
    OAUTH2_REDIRECT_URI: "https://myfeapp.herokuapp.com/oauth2/redirect",
  },
};

const dev = {
  url: {
    API_BASE_URL: "http://localhost:8080",
    OAUTH2_REDIRECT_URI: "http://localhost:3000/mainPage",
  },
};

export const config = dev;
