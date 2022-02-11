import React, { useState, useEffect } from "react";
import { Button ,Input} from "@material-ui/core";
import { storage, db} from "./firebase";
import firebase from "firebase";
import "./ImageUpload.css";
function ImageUpload({username}) {
    const [caption,setCaption]=useState("");
    const [url, setUrl]=useState("");
    /**progress bar for image uploading */
    const [progress,setProgress]=useState(0);
    const [image,setImage]=useState(null);
    

    const handleChange =(e)=>{
        // get the first files you actualy selected ans set yu image 
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
         /**Accessing storage in firebase */
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            // Error function ...
            console.log(error);
            alert(error.message)
          },
          () => {
            // complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setUrl(url);
    
                // post image inside db
                db.collection("posts").add({
                  imageUrl: url,
                  caption: caption,
                  username: username,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
    
                setProgress(0);
                setCaption("");
                setImage(null);
              });
          }
        );
    }
   
    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100" />
            <Input
              placeholder="Enter a caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
        <div>
              <input type="file" onChange={handleChange} />
              <Button className="imageupload__button" onClick={handleUpload}>
                Upload
              </Button>
        </div>
  
        <br />
      </div>
    )
}

export default ImageUpload
