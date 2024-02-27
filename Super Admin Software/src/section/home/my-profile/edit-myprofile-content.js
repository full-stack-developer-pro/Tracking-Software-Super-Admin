import React, { useEffect, useState, useRef } from "react";
import DataService from "../../../services/data.service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const styles = {
  input: {
    opacity: "0%", // dont want to see it
    position: "absolute", // does not mess with other elements
  },
};
const EditProfileContent = (props) => {
  const form = useRef();
  const hiddenButtonRef = useRef(null);
  const [phoneCode, setPhoneCode] = useState("254");
  const [userName, setUserName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [link, setLink] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const inputFileRef = React.useRef();
  const imgRef = React.useRef();
  const navigate = useNavigate();
  //console.log(props)



  const setPdata = () => {
    setName(props.data.name)
    //setLastName(props.data.last_name)
    //setcompanyName(props.data.company_name)
    //setMiddleName(props.data.middle_name)
    //setLink(props.data.website_link)
    setEmail(props.data.email)
    setPhoneCode(props.data.phone)
    setAddress(props.data.address)
    //setCity(props.data.city)
    setState(props.data.state)
  }
  useEffect(() => {
    setPdata();
  }, [props.data]);

  const onFileChangeCapture = (e) => {
    /*Selected files data can be collected here.*/
    const file = e.target.files[0];
    console.log(file, "file");
    setFile(e.target.files);
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    reader.onloadend = function (theFile) {
      console.log(theFile);
      var image = new Image();
      image.src = theFile.target.result;
      imgRef.current.src = image.src;
    };
  };
  const onChangeUserName = (e) => {
    const data = e.target.value;
    setUserName(data);
  };
  const onChangeFirstName = (e) => {
    const data = e.target.value;
    setName(data);
  };

 

  const onChangeLastName = (e) => {
    const data = e.target.value;
    setLastName(data);
  };
  const onChangeMiddleName = (e) => {
    const data = e.target.value;
    setMiddleName(data);
  };
  const onChangeEmail = (e) => {
    const data = e.target.value;
    setEmail(data);
  };
  const onChangePhone = (e) => {
    const data = e.target.value;
    setPhone(data);
  };
  const onChangePassword = (e) => {
    const data = e.target.value;
    setPassword(data);
  };
  const onChangeLink = (e) => {
    const data = e.target.value;
    setLink(data);
  };
  const onChangeAddress = (e) => {
    const data = e.target.value;
    setAddress(data);
  };
  const onChangeCity = (e) => {
    const data = e.target.value;
    setCity(data);
  };
  const onChangeState = (e) => {
    const data = e.target.value;
    setState(data);
  };

  const onChangereferral = (e) => {
    const data = e.target.value;
    setReferral(data);
  };
  const onChangeCompanyName = (e) => {
    const data = e.target.value;
    setcompanyName(data);
  };

  const triggerFile = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {};
    if(name)
    {
      data.name = name;
    }
    if(userName)
    {
      data.username = userName;
    }
    if (email) {
      data.email = email; // Assuming email is the updated email
    }
    if(phone){
      data.phoneNumber =  phone ;
    }
    
    DataService.updateUser(data,props?.data?._id).then(
      () => {
        setLoading(false);
        toast.success("Updated completed successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/my-profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message ||
          error.toString();
        setLoading(false);
        toast.error(resMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      }
    );
  };
  return (
    <>
      <div className="MyprofileBanner">
        <div className="profile-info">
          <figure className="mb-0" onClick={triggerFile}>
            {props?.data?.file_path ? (
              <img
                ref={imgRef}
                src={"https://opm-stream.onrender.com/" + props?.data?.file_path}
                alt="profie image"
              />
            ) : (
              <img
                ref={imgRef}
                src="../assets/img/pro-img.jpg"
                alt="profie image"
              />
            )}
          </figure>
          <div className="profile-detail">
            <h4 className="text-white mb-1">{props?.data?.name}</h4>
            {/* <p className="text-white mb-0">{props?.data?.last_name}</p> */}
            <p className="text-white mb-0">
              <i className="me-1">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1658 8.93977C9.64175 10.0015 8.93246 11.0601 8.20575 12.01C7.48132 12.957 6.75442 13.7768 6.20768 14.3605C6.13503 14.438 6.06566 14.5113 6 14.5801C5.93434 14.5113 5.86497 14.438 5.79232 14.3605C5.24558 13.7768 4.51868 12.957 3.79425 12.01C3.06754 11.0601 2.35825 10.0015 1.83423 8.93977C1.3048 7.86708 1 6.86191 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 6.86191 10.6952 7.86708 10.1658 8.93977ZM6 16C6 16 12 10.3137 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 10.3137 6 16 6 16Z"
                    fill="#F6F5FA"
                  />
                  <path
                    d="M6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6C8 7.10457 7.10457 8 6 8ZM6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
                    fill="#F6F5FA"
                  />
                </svg>
              </i>
              {props?.data?.address}
            </p>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="container-fluid">
          <ToastContainer></ToastContainer>
          <form onSubmit={handleSubmit} className="mt-4 login" ref={form}>
            <div className="row">
              <div className="d-flex w-100 justify-content-between align-items-center mb-4">
                <h4 className="mb-0 f-700">Edit Profile</h4>
              </div>
              <div className="col-md-6 mb-4">
              <label>Name:</label>
                <input
                  type="text"
                  onChange={onChangeFirstName}
                  className="form-control"
                  placeholder="First Name"
                  value={name}
                />
              </div>

              <div className="col-md-6 mb-4">
              <label>UserName:</label>
                <input
                  type="text"
                  onChange={onChangeUserName}
                  className="form-control"
                  placeholder="User Name"
                  defaultValue={props?.data?.username}
                />
              </div>
         
              <div className="col-md-6 mb-4">
              <label>Email:</label>
                <input
                  type="email"
                  reuired
                  value={email}
                  onChange={onChangeEmail}
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="col-md-6 mb-4">
              <div className="country_adminmain">
                  <div className="phone_int">
                  
                  <label>Phone Number:</label>
                        <input
                      type="number"
                      onChange={onChangePhone}
                      //value={phone}
                      defaultValue={props?.data?.phoneNumber}
                      className="form-control"
                      required
                      maxLength={10}
                      placeholder="Mobile*"
                    />                  
               
                                        </div>
                                        
                                    </div>

                  <div className="flex_countrytwo">
                    
                  </div>
              
              </div>
         
 
              <div className="col-md-6 mb-4">
 
                <input
                  type="file"
                  ref={inputFileRef}
                  style={styles.input}
                  onChangeCapture={onFileChangeCapture}
                />
              </div>

              <div className="col-md-12">
                <button className="btn btn-primary" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Save</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfileContent;
