import React, { useState } from 'react'

const UploadIMg = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  function handleFileUpload(event) {
    setSelectedFile(event.target.files[0]);
  }
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <img src={selectedFile && URL.createObjectURL(selectedFile)} alt="" />
    </div>
  )
}

export default UploadIMg