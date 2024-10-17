import React, { useState, useRef } from 'react';
import { MdDelete } from "react-icons/md";

// Import your images for each file type
import wordIcon from './images/word.png'; // Replace with the correct path
import pdfIcon from './images/pdf.png'; // Replace with the correct path
import imageIcon from './images/image.png'; // Replace with the correct path
import textIcon from './images/text.png'; // Replace with the correct path
import zipIcon from './images/zip.png'; // Replace with the correct path

function Attachment() {
    const [attachments, setAttachments] = useState([]);
    const fileInputRef = useRef(null);

    // Handle file selection
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setAttachments((prevAttachments) => [...prevAttachments, ...selectedFiles]);
        fileInputRef.current.value = ''; // Reset the input after selection
    };

    // Handle file deletion
    const handleDelete = (fileName) => {
        setAttachments((prevAttachments) => prevAttachments.filter(file => file.name !== fileName));
    };

    // Get file type icon based on file extension
    const getFileIcon = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        switch (extension) {
            case 'doc':
            case 'docx':
                return <img src={wordIcon} alt="Word Document" width="16" height="16" />;
            case 'pdf':
                return <img src={pdfIcon} alt="PDF Document" width="16" height="16" />;
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return <img src={imageIcon} alt="Image" width="16" height="16" />;
            case 'txt':
                return <img src={textIcon} alt="Text File" width="16" height="16" />;
            case 'zip':
            case 'rar':
                return <img src={zipIcon} alt="Zip File" width="16" height="16" />;
            default:
                return <img src={textIcon} alt="File" width="16" height="16" />; // Default icon for unknown types
        }
    };

    return (
        <div className="attachment-container">
            <div className="heading-btn">
                <h2>Attachments</h2>
                <button className="attach-btn">
                    <label htmlFor="file-input" className="custom-file-label">
                        Attach
                    </label>
                </button>
                <input
                    ref={fileInputRef}
                    id="file-input"
                    type="file"
                    multiple
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
            <div className="attachment-list">
                {attachments.map((file, index) => (
                    <div key={index} className="attachment-item">
                        <div className="list-icons">
                            <span className="file-icon">{getFileIcon(file.name)}</span>
                            {/* Wrap the file name in an anchor tag */}
                            <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                                {file.name}
                            </a>
                        </div>
                        <MdDelete onClick={() => handleDelete(file.name)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Attachment;
