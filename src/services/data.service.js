import axios from "axios";
import AuthService from "../services/auth.service";

const API_URL = (process.env.NODE_ENV != 'production' ? "https://trackingtime-c5jw.onrender.com/" : "https://trackingtime-c5jw.onrender.com/");


axios.interceptors.request.use(function (config) {
  const token = AuthService.getCurrentUserTokken();
  config.headers.Authorization = 'Bearer ' + token;

  return config;
});
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    localStorage.removeItem("user");
    window.location.href = '/#/login'

  }
  return Promise.reject(error);
});
const addAboutUs = (data) => {
  return axios.post(API_URL + "api/superAdmin/add/aboutus", data);
};
const getAboutUs = () => {
  return axios.get(API_URL + "api/superAdmin/get/aboutus");
};
const addWhyUs = (data) => {
  return axios.post(API_URL + "api/superAdmin/add/whyus", data);
};
const getWhyUs = () => {
  return axios.get(API_URL + "api/superAdmin/get/whyus");
};
const addFunFact = (data) => {
  return axios.post(API_URL + "api/superAdmin/add/funFact", data);
};
const getFunFact = () => {
  return axios.get(API_URL + "api/superAdmin/get/funFact");
};
const addSponsors = (data) => {
  return axios.post(API_URL + "api/superAdmin/add/home/sponser", data);
};
const getSponsors = () => {
  return axios.get(API_URL + "api/superAdmin/get/home/sponser");
};
const addNewsletter = (data) => {
  return axios.post(API_URL + "api/superAdmin/add/homeBook/newsLetter", data);
};
const getNewsletter = () => {
  return axios.get(API_URL + "api/superAdmin/get/home/newsLetter");
};
const addPage = (data) => {
  return axios.post(API_URL + "api/page/add", data);
};

//http://localhost:8080/api/page/add

const getEvent = () => {
  return axios.get(API_URL + "api/ownerEvent/getAllData");
};

//http://localhost:3000/api/event/BygetAllId/65955ab83f6f1a517910e524

const addCompany = (data) => {
  return axios.post(API_URL + "api/company/add", data);
};

//http://localhost:8080/api/company/add

const AddSubscription = (data) => {
  return axios.post(API_URL + "api/subscription/add", data);
};

//http://localhost:8080/api/subscription/add

const UpdateSubscription = (id, data) => {
  return axios.put(API_URL + "api/subscription/update/" + id, data);
};

// const updateCompany = (_id, data) => {
//   return axios.put(API_URL + "api/company/update/" + _id, data);
// };



//http://localhost:8080/api/subscription/update/65dd69c95db78455dc221ad6


const getCompany= () => {
  return axios.get(API_URL + "api/company/getAll");
};

//http://localhost:8080/api/company/getAll

const getSubscription= () => {
  return axios.get(API_URL + "api/subscription/getAll");
};

//http://localhost:8080/api/subscription/getAll
 

const getSingleCompany = (_id) => {
  return axios.get(API_URL + "api/company/get/" + _id);
};
//http://localhost:8080/api/company/get/65dc41dd168d30300da2bbf6


const getSingleSubscription = (_id) => {
  return axios.get(API_URL + "api/subscription/get/" + _id);
};
//http://localhost:8080/api/subscription/get/65dd69c95db78455dc221ad6


const updateCompany = (_id, data) => {
  return axios.put(API_URL + "api/company/update/" + _id, data);
};
//http://localhost:8080/api/company/update/65dc41dd168d30300da2bbf6
 

const deleteEvent = (_id) => {
  return axios.delete(API_URL + "api/superAdmin/delete/event/" + _id);
};

//http://localhost:3000/api/superAdmin/delete/event/6597efe77e6aa649702ac349

const deleteCompany = (_id) => {
  return axios.delete(API_URL + "api/company/delete/" + _id);
};

//http://localhost:8080/api/company/delete/65dc478b1ac6d0f37d8ff9cf

const deleteSubscription = (_id) => {
  return axios.delete(API_URL + "api/subscription/delete/" + _id);
};

//http://localhost:8080/api/subscription/delete/65dd69c95db78455dc221ad6

const getSingleEvent = (id) => {
  return axios.get(API_URL + "api/ownerEvent/getSingle/" + id);
};
//http://localhost:3000/api/ownerEvent/getSingle/6597d4d67e75454954fd0645

const updateEvent = (id, data) => {
  return axios.put(API_URL + "api/superAdmin/update/event/" + id, data);
};

//http://localhost:3000/api/superAdmin/update/event/6597d4d67e75454954fd0645

const addArtist = (data) => {
  return axios.post(API_URL + "api/artist/add", data);
};
//http://localhost:3000/api/artist/add

const getArtist = (id) => {
  return axios.get(API_URL + "api/artist/getAllById/"+id);
};
//http://localhost:3000/api/artist/getAllById/65955ab83f6f1a517910e524

const getSingleArtist = (id) => {
  return axios.get(API_URL + "api/artist/getById/" + id);
};
//http://localhost:3000/api/artist/getById/659512f3757d4db2e977bc5c

const updateArtist = (id, data) => {
  return axios.put(API_URL + "api/artist/update/" + id, data);
};
//http://localhost:3000/api/artist/update/659512f3757d4db2e977bc5c


const deleteArtist = (_id) => {
  return axios.delete(API_URL + "api/artist/delete/" + _id);
};

//http://localhost:3000/api/artist/delete/659512f3757d4db2e977bc5c

const addCategory = (data) => {
  return axios.post(API_URL + "api/category/add", data);
};

//http://localhost:3000/api/category/add


const getCategory = (type) => {
  return axios.get(API_URL + "api/category/getAllByType?type=" + type);
};

//http://localhost:3000/api/category/getAllByType?type=1&front=yes
//http://localhost:3000/api/category/getAll

// const getCategory = (type) => {
//   return axios.get(API_URL + "api/categories/getAll?type=" + type);
// };

const getArtistCategory = () => {
  return axios.get(API_URL + "api/artist/category/getAll");
};
//http://localhost:3000/api/artist/category/getAll

const getAllBookedEvent = () => {
  return axios.get(API_URL + "api/event/book/getAll");
};

//http://localhost:3000/api/event/book/getAll

const getAllBookedVenue = () => {
  return axios.get(API_URL + "api/venue/book/getAll");
};
//http://localhost:3000/api/venue/book/getAll

const addArtistCategory = (data) => {
  return axios.post(API_URL + "api/artist/category/add", data);
};
//http://localhost:3000/api/artist/category/add

const getCategoryDetail = (id) => {
  return axios.get(API_URL + "api/category/getById/" + id);
};
//http://localhost:3000/api/category/getById/65965c85e88044c29e34ffb6

const updateCategory = (data,id) => {
  return axios.put(API_URL + "api/category/update/" +  id,data);
};

const getUserDetail = (_id) => {
  return axios.get(API_URL + "api/superadmin/get/" + _id);
};

//http://localhost:8080/api/superadmin/get/65d5abf53aa07a1b03b5fd25

 

const updateUser = (data, _id) => {
  return axios.put(API_URL + "api/superadmin/update/" + _id, data);
};

//http://localhost:8080/api/superadmin/update/65d5abf53aa07a1b03b5fd25

 


const changePassword = (id,data)  => {
  return axios.put(API_URL + "api/superadmin/changePassword/" +id,data);
};

//http://localhost:8080/api/superadmin/changePassword/65d5abf53aa07a1b03b5fd25





const getNotifications = () => {
  return axios.get(API_URL + "api/notification/getNotification");
  
};
const getAllCategory = (type) => {
  return axios.get(API_URL + "api/categories/getAll");
};
const getAllFilter = (a, b, c, d, e, f) => {
  return axios.get(API_URL + "api/studentRegistration/getfilteredCampRegistration?name=" + a + "&gender=" + b + "&birthYear=" + c + "&location=" + d + "&position=" + e + "&skillLevel=" + f );
};

// const sendEmailToCampRegistrations = (data) => {
//   return axios.post(API_URL + "api/studentRegistration/sendMailToCampRegistrations", data);
// };

const addBlog = (data) => {
  return axios.post(API_URL + "api/blog/blog", data);
};

//http://localhost:3000/api/blog/blog
const getBlog = () => {
  return axios.get(API_URL + "api/blog/getBlog");
};

//http://localhost:3000/api/blog/getBlog

const deleteBlog = (id) => {
  return axios.delete(API_URL + "api/blog/deleteBlog/" + id);
};

//http://localhost:3000/api/blog/deleteBlog/659e4bded991223e28766a14

const getBlogDetails = (id) => {
  return axios.get(API_URL + "api/blog/getOneBlog/" + id);
};

//http://localhost:3000/api/blog/getOneBlog/659e446ff366dfaf6fd2218b



const addBlogUpdated = (data, id) => {
  return axios.put(API_URL + "api/blog/updateBlog/" + id, data);
};

//http://localhost:3000/api/blog/updateBlog/659e446ff366dfaf6fd2218b


const DataService = {
  //sendEmailToCampRegistrations,
  getAllFilter,
  getAllCategory,
 
  //addLesson,
  
  
  
  
  
  addAboutUs,
  getAboutUs,
  addWhyUs,
  getWhyUs,
  addFunFact,
  getFunFact,
  addSponsors,
  getSponsors,
  addNewsletter,
  getNewsletter,
  addPage,
  getEvent,
  addCompany,
  AddSubscription,
  UpdateSubscription,
  getCompany,
  getSubscription,
  getSingleEvent,
  updateEvent,
  deleteEvent,
  deleteCompany,
  deleteSubscription,
  getSingleCompany,
  getSingleSubscription,
  updateCompany,
  addArtist,
  getArtist,
  getSingleArtist,
  updateArtist,
  deleteArtist,
  addCategory,
  getCategory,
  getAllBookedEvent,
  getAllBookedVenue,
  addArtistCategory,
  getCategoryDetail,
  updateCategory,
  getArtistCategory,
  getUserDetail,
  updateUser,
  changePassword,
  addBlog,
  getBlog,
  deleteBlog,
  getBlogDetails,
  addBlogUpdated,



 
  //getCategory,

  

  //getUserDetail,
  //updateUser,
  //getCategoryDetail,
  //updateCategory,
 
  
  
  
  //changePassword,
  // getDashboard,


  
  getNotifications
}
export default DataService;