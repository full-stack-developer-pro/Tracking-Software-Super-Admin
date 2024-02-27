import React, { useEffect, useState, useRef } from "react";
import DataService from "../../../services/data.service";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
import TagsInput from '../../../common/TagsInput'
import 'react-toastify/dist/ReactToastify.css';
 
 
const styles = {
    input: {
        opacity: '0%', // dont want to see it
        position: 'absolute' // does not mess with other elements 
    }
}
const MAX_COUNT = 5;
const serverUrl = 'https://opm-stream.onrender.com/'

let oldImages = [];
const EditCampSection = () => {
    const params = useParams()
    const editorRef = useRef(null);
    const form = React.useRef();
    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [attendies, setAttendies] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [reviews, setReviews] = useState("");


    const [companyName, setCompanyName] = useState("");
    const[companyLocation,setCompanyLocation] = useState("");
    const[companyWebsite,setCompanyWebsite] = useState("");
    const[companyNumber,setCompanyNumber] = useState("");
    const[ownerName,setOwnerName] = useState("");
    const[ownerNumber,setOwnerNumber] = useState("");
    const[ownerEmail,setOwnerEmail] = useState("");
    const[companyEmail,setCompanyEmail] = useState("");
    

    const [lessonId, setLessonId] = useState("");
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [images, setImages] = useState([]);
    const [fileLimit, setFileLimit] = useState(false);
    const inputFileRef = React.useRef();
    const imgRef = React.useRef();
    const navigate = useNavigate();
    const [allActive, setAllActive] = useState(false);
    const [type, setType] = useState('');
    const [data, setData] = useState('');
    
    const [parking, setParking] = useState("");


    const [amen,setAmen] = useState([]);
    const [amenities, setAmenities] = useState([]);

    const [hobbies, setHobbies] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    const [otherValue, setOtherValue] = useState([]);
    const [other, setOther] = useState([]);



    const getSinglelesson = () => {
        DataService.getSingleCompany(params.id).then((data) => {
            setData(data?.data?.data);

            setCompanyName(data?.data?.data?.companyName)
            setCompanyLocation(data?.data?.data?.companyLocation)
            setCompanyWebsite(data?.data?.data?.companyWebsiteURL)
            setCompanyNumber(data?.data?.data?.companyPhoneNumber)
            setCompanyEmail(data?.data?.data?.companyEmail)
            setOwnerName(data?.data?.data?.ownerName)
            setOwnerNumber(data?.data?.data?.ownerContactNo)
            setOwnerEmail(data?.data?.data?.ownerEmail)


            setLoading(false);
        });
    };
    useEffect(() => {
        getSinglelesson();
    }, [params.id])

    const onFileChangeCapture = (e) => {
        /*Selected files data can be collected here.*/
        const file = e.target.files[0]
        setFile(e.target.files)
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);
        reader.onloadend = function (theFile) {
            var image = new Image();
            image.src = theFile.target.result;
            imgRef.current.src = image.src

        }
    };
    const handleUploadedFiles = files => {
        const uploaded = (uploadedFiles ? uploadedFiles : []);
        let limitExceeded = false;
        let imageSrc = [];
        if (images.length) {
            images.map((img, i) => {
                imageSrc.push(img)
            });
        }
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                const reader = new FileReader();
                const url = reader.readAsDataURL(file);
                reader.onloadend = function (theFile) {
                    var image = new Image();
                    image.src = theFile.target.result;
                    imageSrc.push(image.src)
                }
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    toast.error(`You can only uploaded a maximun of ${MAX_COUNT} files`, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setFileLimit(true);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) {
            setUploadedFiles(uploaded);
            setImages(imageSrc);

        }
    }
    const onFileChangeCaptureMultiple = (e) => {
        const choosenFiles = Array.prototype.slice.call(e.target.files);
        handleUploadedFiles(choosenFiles)
    }

    const triggerFile = () => {
        /*Collecting node-element and performing click*/
        inputFileRef.current.click();
    };

    const onChangeParking = (e) => {
        // const parking = e.target.value;
        // setParking(parking);
        setParking(e.target.value);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
      const handleInputChangeAm = (e) => {
        setAmenities(e.target.value);
      };
      const handleInputChangeOther = (e) => {
        setOther(e.target.value);
      };
      
      const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
          setHobbies([...hobbies, inputValue]);
          setInputValue("");
        }
      };

      const handleDelete = (index) => {
        const newHobbies = [...hobbies];
        newHobbies.splice(index, 1);
        setHobbies(newHobbies);
      };
      

      const handleDeleteAmenities = (index) => {
        const newAmen = [...amen];
        newAmen.splice(index, 1);
        setAmen(newAmen);
      };


      const handleKeyAmenities = (e) => {
        if (e.key === "Enter" && amenities.trim() !== "") {
          setAmen([...amen, amenities]);

          console.log(amen);
          setAmenities("");
        }
      };

      const handleDeleteOther = (index) => {
        const newOthers = [...otherValue];
        console.log(newOthers)
        newOthers.splice(index, 1);
        setOtherValue(newOthers);
      };


      const handleKeyOther = (e) => {
        if (e.key === "Enter" && other.trim() !== "") {
          setOtherValue([...otherValue, other]);
          setOther("");
        }
        console.log("other data",otherValue);
        console.log("other value",other);
      };
     
      const onChangeDescription = (content) => {
        setDescription(content);
      }

      const onCompanyName = (e) => {
        const companyName = e.target.value;
        setCompanyName(companyName);
    };
    console.log("Company Name",companyName);

    const onCompanyLocation = (e) => {
        const companyLocation = e.target.value;
        setCompanyLocation(companyLocation);
    }
    
    const onCompanyWebsite = (e) => {
        const websiteURL = e.target.value;
        setCompanyWebsite(websiteURL);
    }

    const onCompanyNumber = (e) => {
        const number = e.target.value;
        setCompanyNumber(number);
    }

    const onChangeCompanyEmail = (e) => {
        const companyEmail = e.target.value;
        setCompanyEmail(companyEmail);
    }

      const onChangeOwnerName = (e) => {
        const ownerName = e.target.value;
        setOwnerName(ownerName);
    }
    
    const onChangeOwnerNumber = (e) => {
        const ownerNumber = e.target.value;
        setOwnerNumber(ownerNumber);
    }
    

    const onChangeOwnerEmail = (e) => {
        const ownerEmail = e.target.value;
        setOwnerEmail(ownerEmail);
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMessage("");
    //     setLoading(true);
    //     const data = new FormData();

    //     if (file && file.length > 0) {
    //         setLoading(true);
    //         data.append("images", file[0]);
    //         if (uploadedFiles && uploadedFiles.length > 0) {
    //           uploadedFiles.some((file) => {
    //             data.append("images", file);
    //           });
    //         }
    //         data.append('title', eventName);
    //         data.append('location', location);
    //         data.append('description', editorRef.current.getContent());
    //         data.append('price', price);
    //         hobbies.forEach((feature, index) => {
    //             data.append(`features[${index}]`, feature);
    //         });


    //         amen.forEach((amenity, index) => {
    //             data.append(`amenities[${index}]`, amenity);
    //         });
        
        
    //         otherValue.forEach((other, index) => {
    //             data.append(`others[${index}]`, other);
    //         });
    //         data.append('parking',parking);
        
    //     DataService.updateVenue(params.id,data).then(
    //         () => {
    //             toast.success('Event updated successfully!', {
    //                 position: toast.POSITION.TOP_RIGHT
    //             });
    //             setLoading(false);
    //             navigate("/venue");
    //             setTimeout(function(){
    //                 window.location.reload();
    //             }, 1500)
    //         },
    //         (error) => {
    //             const resMessage =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.msg) ||
    //                 error.message ||
    //                 error.toString();

    //             setLoading(false);
    //             toast.error(resMessage, {
    //                 position: toast.POSITION.TOP_RIGHT
    //             });
    //         }
    //     );
    // } else {
    //     toast.error("Please select Venue thumbnail", {
    //       position: toast.POSITION.TOP_RIGHT,
    //     });
    //   }
  
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        const data = {
            companyName : companyName,
            companyWebsiteURL : companyWebsite,
            companyLocation : companyLocation,
            companyPhoneNumber : companyNumber,
            ownerEmail : ownerEmail,
            ownerName : ownerName,
            ownerContactNo : ownerNumber,
            companyEmail : companyEmail,
           

        } 


            //data.append('details', editorRef.current.getContent())
            DataService.updateCompany(params.id,data).then(
                () => {
                    navigate("/CompanyList");
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
                        position: toast.POSITION.TOP_RIGHT
                  });
                }
            );
        
    };



    return (


        <div className="container-fluid">
            <ToastContainer></ToastContainer>
            <div className="row">
                <div className="d-flex w-100 justify-content-between align-items-center mb-4">
                    {/* <h4 className="mb-0">Add Lesson</h4> */}
                    <div class="modal fade" id="ImportProuct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                <div class="modal-body bg-yellow">
                                    <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="card-body p-4 importSectionModal bg-white rounded-5 m-5">

                                        <div class="mb-4">
                                            <label class="form-label">Upload File</label>
                                            <div class="upload-box">
                                                <i><svg width="47" height="39" viewBox="0 0 47 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 27.5L24 19.5L16 27.5" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 19.5V37.5" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.7799 32.28C42.7306 31.2165 44.2716 29.5337 45.1597 27.4972C46.0477 25.4607 46.2323 23.1864 45.6843 21.0334C45.1363 18.8803 43.8869 16.971 42.1333 15.6069C40.3796 14.2427 38.2216 13.5014 35.9999 13.5H33.4799C32.8745 11.1585 31.7462 8.98464 30.1798 7.14195C28.6134 5.29927 26.6496 3.83567 24.4361 2.86118C22.2226 1.8867 19.817 1.42669 17.4002 1.51573C14.9833 1.60478 12.6181 2.24057 10.4823 3.3753C8.34649 4.51003 6.49574 6.11417 5.06916 8.06713C3.64259 10.0201 2.6773 12.271 2.24588 14.6508C1.81446 17.0305 1.92813 19.477 2.57835 21.8065C3.22856 24.136 4.3984 26.2877 5.99992 28.1" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 27.5L24 19.5L16 27.5" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </i>
                                                <div class="ms-3">
                                                    <h5>Select a file or drag and drop here</h5>
                                                    <p class="mb-0 text-secondary">JPG, PNG or PDF, file size no more than 10MB</p>
                                                </div>
                                                <div class="upload-btn-wrapper ms-auto ms-3">
                                                    <button class="btn-file">Select file</button>
                                                    <input type="file" name="myfile" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-start btn-min-width">
                                            <button class="btn btn-primary">
                                                <span>Save</span>
                                            </button></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-4 login" ref={form}>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <div className="row">
                <div className="col-xxl-3 col-lg-4">

                    <h4>Owner Details</h4>

                        <div className="mb-3">
                        <label className="form-label">Owner Name </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                value={ownerName}
                                onChange={onChangeOwnerName}
                                placeholder="Owner Name" />
                                {/* <div className="form-text">A Lesson name is required and recommended to be unique.</div> */}
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Owner Contact Number</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                value={ownerNumber}
                                onChange={onChangeOwnerNumber}
                                placeholder="Owner Contact Number" />
                                {/* <div className="form-text">A Lesson name is required and recommended to be unique.</div> */}
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Owner Email</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                value={ownerEmail}
                                onChange={onChangeOwnerEmail}
                                placeholder="Owner Email" />
                                {/* <div className="form-text">A Lesson name is required and recommended to be unique.</div> */}
                        </div>



                    </div> 
                  
                    <div className="col-xxl-9 col-lg-8 ps-xxl-5 ps-md-3 ps-0">
                        <div className="card mb-5">
                        <h4 className="form-label">Company Details</h4>

                                                   <div className="card-body p-4">

                                <div className="mb-3">
                                    <label className="form-label">Company Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={companyName}
                                        onChange={onCompanyName}
                                        placeholder="Company Name" />
                                    {/* <div className="form-text">A Lesson name is required and recommended to be unique.</div> */}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Company Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={companyLocation}
                                        onChange={onCompanyLocation}
                                        placeholder="Location" />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Company Website URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={companyWebsite}
                                        onChange={onCompanyWebsite}
                                        placeholder="URL" />

                                </div>

                                <div className="mb-3">
                               <label className="form-label">Company Email</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={companyEmail}
                                    onChange={onChangeCompanyEmail}
                                    placeholder="Company Email" />
                                    {/* <div className="form-text">A Lesson name is required and recommended to be unique.</div> */}
                            </div>

                                <div className="mb-3">
                                    <label className="form-label">Company Phone Number </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        required
                                        value={companyNumber}
                                        onChange={onCompanyNumber}
                                        placeholder="Number" />

                                </div>

   
                            </div>
                        </div>
                        <div className="card mb-5">


                            <div className="d-flex justify-content-end btn-min-width">
                                <button className="btn btn-primary" >

                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
       
    );
};

export default EditCampSection;