import axios from "axios";

const API_URL = (process.env.NODE_ENV != 'production' ? "https://trackingtime-c5jw.onrender.com/" : "https://trackingtime-c5jw.onrender.com/");

const register = (username, email, password) => {
  return axios.post(API_URL + "api/user/register", {
    username,
    email,
    password,
  });
};

// const login = (username, password) => {
//   return axios
//     .post(API_URL + "api/superAdmin/login", {
//       email:username,
//       password,
//       // role:"admin"
//     })
//     .then((response) => {
//       console.log(response.data.data)
//       if (response.data.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data.data.user.email));
//         localStorage.setItem("accessToken", JSON.stringify(response.data.data.accessToken));
//       }

//       return response.data;
//     });
// };

const login = (username, user_pass) => {
  return axios
    .post(API_URL + "api/superadmin/login", {
      email: username,
      password: user_pass,
      //role: "admin"   
    })
    .then((response) => {
      if (response.data.data.aceesToken) {
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        localStorage.setItem("userId", JSON.stringify(response.data.data.user._id));
        localStorage.setItem("token", JSON.stringify(response.data.data.aceesToken));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const getCurrentUserTokken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getCurrentUserTokken
}

export default AuthService;