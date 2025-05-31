import React, { useState } from 'react';
import resume1 from '../assets/resume_template1.jpg';
import resume2 from '../assets/resume_template2.jpg';
import resume3 from '../assets/resume_template3.png';
import resume4 from '../assets/resume_template4.png';
import resume5 from '../assets/resume_template5.png';
 // 👈 Import Template 4 image

import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import '../styles/template.css';

const Templates = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const navigate = useNavigate();

    const handleTemplateClick = (templateImage) => {
        setSelectedTemplate(templateImage);
    };

    const handleClose = () => {
        setSelectedTemplate(null);
    };

    const handleResumeClick = (templateNumber) => {
        navigate(`/resume/template=${templateNumber}`);
    };

    return (
        <div className='container'>
            <h2 className='heading'>Resume Templates</h2>
            <div className="template-container">
                <div onClick={() => handleTemplateClick(resume1)}>
                    <img className="template" src={resume1} alt="Template 1" width={'280px'} height={'380px'} />
                    <p onClick={() => handleResumeClick(1)}>Use Template</p>
                </div>
                <div onClick={() => handleTemplateClick(resume2)}>
                    <img className="template" src={resume2} alt="Template 2" width={'280px'} height={'380px'} />
                    <p onClick={() => handleResumeClick(2)}>Use Template</p>
                </div>
                <div onClick={() => handleTemplateClick(resume3)}>
                    <img className="template" src={resume3} alt="Template 3" width={'280px'} height={'380px'} />
                    <p onClick={() => handleResumeClick(3)}>Use Template</p>
                </div>
                <div onClick={() => handleTemplateClick(resume4)}>
                    <img className="template" src={resume4} alt="Template 4" width={'280px'} height={'380px'} />
                    <p onClick={() => handleResumeClick(4)}>Use Template</p>
                </div>
                <div onClick={() => handleTemplateClick(resume5)}>
                    <img className="template" src={resume5} alt="Template 5" width={'280px'} height={'380px'} />
                    <p onClick={() => handleResumeClick(5)}>Use Template</p>
                </div>
            </div>

            {selectedTemplate && (
                <div className="template-preview-overlay" onClick={handleClose}>
                    <div className="template-preview">
                        <IconButton onClick={handleClose} style={{ position: "absolute", top: "10px", right: "10px" }}>
                            <CloseIcon />
                        </IconButton>
                        <img src={selectedTemplate} alt="Selected Template" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Templates;
