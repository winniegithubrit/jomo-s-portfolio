import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Avatar, Grid, Fade } from '@mui/material';
import { Home as HomeIcon, Work, School, Code, ContactMail, ArrowForward } from '@mui/icons-material';
import profileImage from "./images/winnie-profile photo.jpeg";

function Home() {
  return (
    <Box sx={{
      flexGrow: 1,
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #0d1b2a 100%)',
      color: '#e0e0e0',
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
    }}>
      <AppBar position="static" sx={{
        bgcolor: 'rgba(13, 27, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        py: 1
      }}>
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
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Fade in={true} timeout={1000}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#ffd700',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    mb: 2,
                    display: 'block'
                  }}
                >
                  Software Developer
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                    lineHeight: 1.1,
                    mb: 3,
                    letterSpacing: '-1px'
                  }}
                >
                  Building Digital
                  <br />
                  <Box component="span" sx={{ color: '#ffd700' }}>Experiences</Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#a0a0a0',
                    fontWeight: '400',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    lineHeight: 1.7,
                    mb: 4,
                    maxWidth: '600px'
                  }}
                >
                  Junior Software Developer with a completed Bachelor of Science in Mathematics and Computer Science. Experienced in software development, technical support, troubleshooting, web application development, and data analytics. Passionate about delivering reliable IT support, assisting end users, documenting technical processes, and learning new technologies. Based in Nairobi, Kenya.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/project"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: '#ffd700',
                      color: '#0d1b2a',
                      py: 1.8,
                      px: 3.5,
                      fontSize: '1rem',
                      fontWeight: '700',
                      borderRadius: 3,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#ffed4a',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 35px rgba(255, 215, 0, 0.4)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/experience"
                    sx={{
                      borderColor: 'rgba(255, 215, 0, 0.5)',
                      color: '#ffd700',
                      py: 1.8,
                    px: 3.5,
                      fontSize: '1rem',
                      fontWeight: '600',
                      borderRadius: 3,
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#ffd700',
                        bgcolor: 'rgba(255, 215, 0, 0.1)',
                        transform: 'translateY(-3px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    My Experience
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }} order={{ xs: 1, md: 2 }}>
            <Fade in={true} timeout={1200}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(255, 215, 0, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0
                  }}
                />
                <Avatar
                  src={profileImage}
                  alt="Winnie Jomo"
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: { xs: 280, md: 380, lg: 450 },
                    height: { xs: 280, md: 380, lg: 450 },
                    border: '4px solid rgba(255, 215, 0, 0.3)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(255, 215, 0, 0.2)',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      border: '4px solid rgba(255, 215, 0, 0.6)'
                    }
                  }}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
