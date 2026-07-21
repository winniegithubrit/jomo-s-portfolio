import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, TextField, Grid, Alert, Fade } from '@mui/material';
import { Home as HomeIcon, Work, School, Code, ContactMail, Send } from '@mui/icons-material';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    console.log("Form submitted:", formData);
    setTimeout(() => setShowAlert(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { name: 'Email', value: 'winniejomo17@gmail.com', url: 'mailto:winniejomo17@gmail.com' },
    { name: 'Phone', value: '+254 797 594 751', url: 'tel:+254797594751' },
    { name: 'LinkedIn', value: 'linkedin.com/in/jomo-winnie-12a63624b', url: 'https://www.linkedin.com/in/jomo-winnie-12a63624b/' },
    { name: 'GitHub', value: 'github.com/winniegithubrit', url: 'https://github.com/winniegithubrit' },
  ];

  const references = [
    { name: 'Dr Alice Murwayi', role: 'Senior Lecturer, Chuka University', contact: '0724666756' },
    { name: 'Brian Birir', role: 'Supervisor / Scrum Master, Pula Advisors', contact: '0720807242' },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #0d1b2a 100%)' }}>
      <AppBar position="static" sx={{ bgcolor: 'rgba(13, 27, 42, 0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', py: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1400px', mx: 'auto' }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: '#ffd700', 
              fontWeight: '800',
              fontSize: '1.8rem',
              letterSpacing: '-0.5px',
              '&:hover': { color: '#ffed4a' }
            }}
          >
            Winnie Jomo
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/" 
              startIcon={<HomeIcon />}
              sx={{ 
                color: '#e0e0e0',
                fontWeight: '500',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                '&:hover': { 
                  bgcolor: 'rgba(255, 215, 0, 0.1)',
                  color: '#ffd700'
                }
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/project" 
              startIcon={<Code />}
              sx={{ 
                color: '#e0e0e0',
                fontWeight: '500',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                '&:hover': { 
                  bgcolor: 'rgba(255, 215, 0, 0.1)',
                  color: '#ffd700'
                }
              }}
            >
              Projects
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/experience" 
              startIcon={<Work />}
              sx={{ 
                color: '#e0e0e0',
                fontWeight: '500',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                '&:hover': { 
                  bgcolor: 'rgba(255, 215, 0, 0.1)',
                  color: '#ffd700'
                }
              }}
            >
              Experience
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/education" 
              startIcon={<School />}
              sx={{ 
                color: '#e0e0e0',
                fontWeight: '500',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                '&:hover': { 
                  bgcolor: 'rgba(255, 215, 0, 0.1)',
                  color: '#ffd700'
                }
              }}
            >
              Education
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contacts" 
              startIcon={<ContactMail />}
              sx={{ 
                color: '#ffd700',
                fontWeight: '600',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                bgcolor: 'rgba(255, 215, 0, 0.1)'
              }}
            >
              Contact
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/contacts"
              sx={{
                bgcolor: '#ffd700',
                color: '#0d1b2a',
                fontWeight: '700',
                px: 3,
                py: 1.2,
                borderRadius: 3,
                fontSize: '0.95rem',
                ml: 2,
                '&:hover': {
                  bgcolor: '#ffed4a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 12 }, mb: 4, px: { xs: 2, md: 4 } }}>
        <Fade in={true} timeout={800}>
          <Box>
            <Typography 
              variant="overline"
              sx={{ 
                color: '#ffd700', 
                fontWeight: '700', 
                mb: 2,
                display: 'block',
                fontSize: '0.9rem',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              Let's Connect
            </Typography>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                color: '#ffffff', 
                fontWeight: '800',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 6,
                letterSpacing: '-1px'
              }}
            >
              Get In Touch
            </Typography>
          </Box>
        </Fade>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1000}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: { xs: 3, md: 4 }, 
                  borderRadius: 3, 
                  bgcolor: 'rgba(27, 38, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 215, 0, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 40px rgba(255, 215, 0, 0.15)'
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff', 
                    mb: 3, 
                    fontWeight: '700',
                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                  }}
                >
                  Send me a message
                </Typography>
                
                {showAlert && (
                  <Alert 
                    severity="success" 
                    sx={{ 
                      mb: 3,
                      bgcolor: 'rgba(76, 175, 80, 0.2)',
                      color: '#4caf50',
                      border: '1px solid #4caf50'
                    }}
                  >
                    Message sent successfully!
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ 
                      mb: 3, 
                      '& .MuiOutlinedInput-root': { 
                        '& fieldset': { borderColor: 'rgba(255, 215, 0, 0.3)' },
                        '&:hover fieldset': { borderColor: '#ffd700' },
                        '&.Mui-focused fieldset': { borderColor: '#ffd700' }
                      },
                      '& .MuiInputLabel-root': { color: '#a0a0a0' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#ffd700' }
                    }}
                    InputProps={{ style: { color: '#ffffff' } }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ 
                      mb: 3, 
                      '& .MuiOutlinedInput-root': { 
                        '& fieldset': { borderColor: 'rgba(255, 215, 0, 0.3)' },
                        '&:hover fieldset': { borderColor: '#ffd700' },
                        '&.Mui-focused fieldset': { borderColor: '#ffd700' }
                      },
                      '& .MuiInputLabel-root': { color: '#a0a0a0' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#ffd700' }
                    }}
                    InputProps={{ style: { color: '#ffffff' } }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ 
                      mb: 3, 
                      '& .MuiOutlinedInput-root': { 
                        '& fieldset': { borderColor: 'rgba(255, 215, 0, 0.3)' },
                        '&:hover fieldset': { borderColor: '#ffd700' },
                        '&.Mui-focused fieldset': { borderColor: '#ffd700' }
                      },
                      '& .MuiInputLabel-root': { color: '#a0a0a0' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#ffd700' }
                    }}
                    InputProps={{ style: { color: '#ffffff' } }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    endIcon={<Send />}
                    sx={{ 
                      bgcolor: '#ffd700', 
                      '&:hover': { 
                        bgcolor: '#ffed4a',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)'
                      },
                      py: 1.8,
                      fontSize: '1rem',
                      fontWeight: '700',
                      borderRadius: 3,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Fade>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1200}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: { xs: 3, md: 4 }, 
                  borderRadius: 3, 
                  bgcolor: 'rgba(27, 38, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 215, 0, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 40px rgba(255, 215, 0, 0.15)'
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff', 
                    mb: 3, 
                    fontWeight: '700',
                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                  }}
                >
                  Connect with me
                </Typography>
                
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: '#a0a0a0', 
                    mb: 4,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.8
                  }}
                >
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                  {contactInfo.map((contact, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: 'rgba(255, 215, 0, 0.3)',
                        color: '#e0e0e0',
                        justifyContent: 'flex-start',
                        py: 1.5,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        '&:hover': {
                          borderColor: '#ffd700',
                          bgcolor: 'rgba(255, 215, 0, 0.1)',
                          color: '#ffd700',
                          transform: 'translateX(5px)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '0.85rem', color: '#ffd700' }}>
                          {contact.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem' }}>
                          {contact.value}
                        </Typography>
                      </Box>
                    </Button>
                  ))}
                </Box>

                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffd700', 
                    mb: 2, 
                    fontWeight: '700',
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  References
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {references.map((ref, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        bgcolor: 'rgba(13, 27, 42, 0.5)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 215, 0, 0.15)'
                      }}
                    >
                      <Typography sx={{ color: '#ffffff', fontWeight: '600', fontSize: '1rem' }}>
                        {ref.name}
                      </Typography>
                      <Typography sx={{ color: '#a0a0a0', fontSize: '0.85rem', mb: 1 }}>
                        {ref.role}
                      </Typography>
                      <Typography sx={{ color: '#ffd700', fontSize: '0.85rem' }}>
                        📞 {ref.contact}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
