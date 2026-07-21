import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, Chip, Grid, Fade } from '@mui/material';
import { Home as HomeIcon, Work, School, Code, ContactMail } from '@mui/icons-material';

function Project() {
  const projectData = [
    {
      id: 1,
      name: 'Glam Beauty',
      description: 'Developed a full-stack e-commerce application using React.js and Flask featuring CRUD functionality, user authentication, and MPesa payment integration.',
      language: 'React, Flask',
      framework: 'React, Flask',
      type: 'E-commerce',
      url: 'https://github.com/winniegithubrit/Glam-Beauty-Store.git'
    },
    {
      id: 2,
      name: 'MTN Integration',
      description: 'Built a secure backend payment integration service using ASP.NET Core (C#) to process and manage MTN Mobile Money transactions through REST APIs.',
      language: 'C#',
      framework: 'ASP.NET Core',
      type: 'Payment Integration',
      url: 'https://github.com/winniegithubrit/MTN-Intergration.git'
    },
    {
      id: 3,
      name: 'Aesth Foods',
      description: 'Built a Django-based restaurant web application enabling customers to browse menus and place food orders through an interactive web interface.',
      language: 'Python',
      framework: 'Django',
      type: 'Food Delivery',
      url: 'https://github.com/winniegithubrit/aesth-food.git'
    },
    {
      id: 4,
      name: 'FoodApp Backend',
      description: '.Developed a RESTful backend API using Flask to support food ordering operations, implementing database management and API endpoints.',
      language: 'Python',
      framework: 'Flask',
      type: 'API',
      url: 'https://foodapp1-ppuy.onrender.com/'
    }
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
                color: '#ffd700',
                fontWeight: '600',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                bgcolor: 'rgba(255, 215, 0, 0.1)'
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
              My Work
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
              My Projects
            </Typography>
          </Box>
        </Fade>
        
        <Grid container spacing={4} justifyContent="center">
          {projectData.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Fade in={true} timeout={1000 + index * 150}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    bgcolor: 'rgba(27, 38, 59, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 215, 0, 0.15)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(255, 215, 0, 0.2)',
                      borderColor: 'rgba(255, 215, 0, 0.4)'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: 'rgba(13, 27, 42, 0.5)' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%)',
                        zIndex: 1
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 4, position: 'relative', zIndex: 2 }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom 
                        sx={{ 
                          color: '#ffffff', 
                          fontWeight: '700',
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                          mb: 2
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        paragraph 
                        sx={{ 
                          color: '#a0a0a0', 
                          mb: 3,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          lineHeight: 1.7
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.language && (
                          <Chip 
                            label={project.language} 
                            size="small" 
                            sx={{ 
                              bgcolor: 'rgba(27, 38, 59, 0.8)', 
                              color: '#ffd700',
                              border: '1px solid rgba(255, 215, 0, 0.3)',
                              fontSize: { xs: '0.75rem', md: '0.85rem' },
                              '&:hover': { 
                                bgcolor: 'rgba(255, 215, 0, 0.3)',
                                transform: 'scale(1.05)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          />
                        )}
                        {project.framework && (
                          <Chip 
                            label={project.framework} 
                            size="small" 
                            sx={{ 
                              bgcolor: 'rgba(27, 38, 59, 0.8)', 
                              color: '#ffd700',
                              border: '1px solid rgba(255, 215, 0, 0.3)',
                              fontSize: { xs: '0.75rem', md: '0.85rem' },
                              '&:hover': { 
                                bgcolor: 'rgba(255, 215, 0, 0.3)',
                                transform: 'scale(1.05)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          />
                        )}
                        {project.type && (
                          <Chip 
                            label={project.type} 
                            size="small" 
                            sx={{ 
                              bgcolor: 'rgba(27, 38, 59, 0.8)', 
                              color: '#ffd700',
                              border: '1px solid rgba(255, 215, 0, 0.3)',
                              fontSize: { xs: '0.75rem', md: '0.85rem' },
                              '&:hover': { 
                                bgcolor: 'rgba(255, 215, 0, 0.3)',
                                transform: 'scale(1.05)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Box>
                  <Box sx={{ p: 3, pt: 0 }}>
                    {project.url && (
                      <Button
                        variant="contained"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        sx={{ 
                          bgcolor: '#ffd700', 
                          '&:hover': { 
                            bgcolor: '#ffed4a',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)'
                          },
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: '700',
                          borderRadius: 3,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        View on GitHub
                      </Button>
                    )}
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Project;
