import React, { useEffect,useState, useRef } from "react";
import DataService from "../../../services/data.service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MultiRangeSlider from "multi-range-slider-react";
import { Editor } from '@tinymce/tinymce-react';

const styles = {
  input: {
    opacity: "0%", // dont want to see it
    position: "absolute", // does not mess with other elements
  },
};
const AddPageSection = () => {
  const editorRef = useRef(null);
  const editorRefEN = useRef(null);

  const form = React.useRef();
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const inputFileRef = useRef();
  const imgRef = useRef();
  const navigate = useNavigate();





  const storedUserId = JSON.parse(localStorage.getItem("userId"));


  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const data = {
      text : description,
    }
    

      
      DataService.addPage(data).then(
        () => {
          toast.success("Event Added Successfully!")
          navigate("/dashboard");
          window.location.reload();
          // setTimeout(() => {
          //  window.location.reload();
          // },2000)
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
        }
      );
    
  };



  const onChangeDescription = (content) => {
    setDescription(content);
  }

  return (
    <div className="container-fluid">
      <ToastContainer></ToastContainer>
      <div className="row">
        <div className="d-flex w-100 justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Add Page</h4>
          {/* <button
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#ImportProuct"
          >
            Import Event
          </button> */}
        
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

          <div className="col-xxl-9 col-lg-8 ps-xxl-5 ps-md-3 ps-0">
            <div className="card mb-5">
              <div className="card-body p-4">

                <div className="mb-3">
                  <label className="form-label">Text Editor</label>
                

                         <Editor
                              apiKey="1nolfd56snnawdzchbfmu06ihvzd2nkhvgvdj5i85do1bws6"
                              initialValue=" "
                              //onEditorChange={(content) => handleEditorChange(content,selectvalue)}
                              //onEditorChange={(content) => onChangeDescription(content,description)}
                              onEditorChange={(content) => onChangeDescription(content)}
                              onInit={(evt, editor) =>
                                (editorRefEN.current = editor)
                              }

                              init={{
                                direction: description === 'arabic' ? 'rtl' : 'ltr',
                                height: 500,
                                menubar: true,
                                plugins: [
                                  "advlist",
                                  "autolink",
                                  "lists",
                                  "link",
                                  "image",
                                  "charmap",
                                  "preview",
                                  "anchor",
                                  "searchreplace",
                                  "visualblocks",
                                  "code",
                                  "fullscreen",
                                  "insertdatetime",
                                  "media",
                                  "table",
                                  "code",
                                  "help",
                                  "wordcount",
                                  "file",
                                ],
                                toolbar:
                                  "undo redo | blocks | " +
                                  "bold italic forecolor | alignleft aligncenter " +
                                  "alignright alignjustify | bullist numlist outdent indent | " +
                                  "removeformat | image file | help",
                                content_style:
                                  "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
                                images_upload_url:
                                  "https://newsapi.shqlbaz.com:8443/api/EnNews/images",
                                file_picker_types: "image",
                              }}
                         />
                </div>
{/* 
                <div className="mb-3">
                  <label className="form-label">Reviews</label>
                  <input
                      type="text"
                      className="form-control"
                      required
                      onChange={(e) => setReviews(e.target.value)}
                      placeholder="Enter Reviews"
                  />
              </div> */}



                <div className="d-flex justify-content-end btn-min-width">
                  <button className="btn btn-primary">
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPageSection;
