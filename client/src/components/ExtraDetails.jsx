// ...existing imports...
import { useNavigate } from "react-router-dom";
// ...existing code...

const ExtraDetails = () => {
  // ...existing hooks and logic...
  const navigate = useNavigate();

  // Example templates array (replace with your actual template data)
  const templates = [
    { id: 1, name: "Modern", preview: "Template 1 Preview" },
    { id: 2, name: "Classic", preview: "Template 2 Preview" },
    { id: 3, name: "Creative", preview: "Template 3 Preview" }
  ];

  // Style for template cards (same size)
  const templateCardStyle = {
    width: 260,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    borderRadius: '12px',
    background: '#fff',
    padding: '18px 10px'
  };

  // ...rest of your code...

  return (
    <div style={containerStyle}>
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" align="center" fontWeight="bold">
              Extra Details
            </Typography>
          }
        />
      </Card>
      <CardContent>
        {/* ...your skills, achievements, activities code... */}

        {/* --- Templates Section --- */}
        <div style={{ marginTop: "40px" }}>
          <Typography variant="h5" align="center" fontWeight="bold" sx={{ mb: 2 }}>
            Resume Templates
          </Typography>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {templates.map((template) => (
              <div key={template.id} style={templateCardStyle}>
                <Typography variant="h6" sx={{ mb: 1 }}>{template.name}</Typography>
                <Box sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  mb: 1,
                  color: "#aaa"
                }}>
                  {/* Replace this with your actual template preview/image */}
                  {template.preview}
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff8c00",
                    color: "#fff",
                    borderRadius: "6px",
                    mt: 1,
                    width: "100%",
                    "&:hover": { backgroundColor: "#ff7043" }
                  }}
                  onClick={() => navigate(`/templates/${template.id}`)}
                >
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </div>
        {/* --- End Templates Section --- */}

        {/* ...rest of your code (save button, navigation links)... */}
        <p style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>*Please save your data to get edited next time</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <Button
            variant="contained" sx={{
              marginTop: "15px", backgroundColor: "var(--btn)", color: 'black', '&:hover': { backgroundColor: "var(--btnHover)" },
            }}
            onClick={() => handleSave()}
          >
            Save Your Data
          </Button>
        </div>
        <Grid container spacing={2} alignItems="center" lg={12} >
          <Grid item md={12} sm={12} xs={12} lg={12} style={containerStyles}>
            <Link to={'/experience'} style={linkStyle}>
              <ArrowBackIcon style={iconStyle} />
              <h4>Experience Section</h4>
            </Link>
            <Link to={'/templates'} style={linkStyle}>
              <h4>Resume Templates</h4>
              <ArrowForwardIcon style={iconStyle} />
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
};

// ...existing styles and export...
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '5px',
  transition: 'border-radius 0.3s',
  borderRadius: '4px',
  padding: '5px',
};

const containerStyles = {
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
  paddingRight: '40px',
  paddingLeft: '40px',
};
const iconStyle = {
  verticalAlign: 'middle',
  marginLeft: '5px',
};

export default ExtraDetails;