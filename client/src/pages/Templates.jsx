import React, { useState } from 'react';
import resume1 from '../assets/resume_template1.jpg';
import resume2 from '../assets/resume_template2.jpg';
import resume3 from '../assets/resume_template3.png';
import resume4 from '../assets/resume_template4.png';
import resume5 from '../assets/resume_template5.png';

import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import '../styles/template.css';

const TEMPLATE_WIDTH = 270;
const TEMPLATE_HEIGHT = 380;

const templateList = [
    { img: resume1, alt: "Template 1" },
    { img: resume2, alt: "Template 2" },
    { img: resume3, alt: "Template 3" },
    { img: resume4, alt: "Template 4" },
    { img: resume5, alt: "Template 5" },
    
];

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
        <div
            className='container'
            style={{
                maxWidth: 1480,
                margin: '0 auto',
                padding: '24px 0 80px 0', // Increased bottom padding
                minHeight: '100vh',
                boxSizing: 'border-box',
                overflowY: 'auto'
            }}
        >
            <h2 className='heading' style={{ textAlign: 'center', marginBottom: 24 }}>Resume Templates</h2>
            <div
                className="template-container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '16px',
                    justifyItems: 'center',
                    alignItems: 'start',
                    margin: 0,
                    padding: '0 4px',
                    boxSizing: 'border-box',
                }}
            >
                {templateList.map((tpl, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleTemplateClick(tpl.img)}
                        style={{
                            width: TEMPLATE_WIDTH,
                            height: TEMPLATE_HEIGHT + 90,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: '#fff',
                            borderRadius: '14px',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                            cursor: 'pointer',
                            padding: '12px 4px 14px 4px',
                            transition: 'box-shadow 0.2s, transform 0.2s',
                            margin: 0,
                            boxSizing: 'border-box',
                            overflow: 'hidden'
                        }}
                        className="template-card"
                    >
                        <img
                            className="template"
                            src={tpl.img}
                            alt={tpl.alt}
                            width={TEMPLATE_WIDTH}
                            height={TEMPLATE_HEIGHT}
                            style={{
                                objectFit: 'cover',
                                borderRadius: '8px',
                                boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
                                marginBottom: 10,
                                background: '#eee',
                                width: TEMPLATE_WIDTH,
                                height: TEMPLATE_HEIGHT,
                                display: 'block'
                            }}
                        />
                        <div style={{ flexGrow: 1 }} />
                        <p
                            style={{
                                margin: '12px 0 0 0',
                                color: '#ff8c00',
                                fontWeight: 600,
                                fontSize: 16,
                                letterSpacing: 0.5,
                                cursor: 'pointer',
                                textAlign: 'center',
                                border: '1px solid #ff8c00',
                                borderRadius: 6,
                                padding: '6px 0',
                                width: '100%',
                                background: '#fff7e2',
                                transition: 'background 0.2s, color 0.2s'
                            }}
                            onClick={e => {
                                e.stopPropagation();
                                handleResumeClick(idx + 1);
                            }}
                            onMouseOver={e => {
                                e.target.style.background = '#ff8c00';
                                e.target.style.color = '#fff';
                            }}
                            onMouseOut={e => {
                                e.target.style.background = '#fff7e2';
                                e.target.style.color = '#ff8c00';
                            }}
                        >
                            Use Template
                        </p>
                    </div>
                ))}
            </div>

            {selectedTemplate && (
                <div className="template-preview-overlay" onClick={handleClose}>
                    <div className="template-preview">
                        <IconButton onClick={handleClose} style={{ position: "absolute", top: "10px", right: "10px" }}>
                            <CloseIcon />
                        </IconButton>
                        <img src={selectedTemplate} alt="Selected Template" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Templates;