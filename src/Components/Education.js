import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, Chip, Grid, Divider, Fade } from '@mui/material';
import { Home as HomeIcon, Work, School, Code, ContactMail } from '@mui/icons-material';

function Education() {
  const education = [
    {
      institution: 'Multimedia University of Kenya',
      degree: 'Bachelor of Science in Mathematics and Computer Science',
      period: 'September 2021 - June 2026',
      coursework: ['HTML', 'CSS', 'C', 'C++', 'Java', 'Object Oriented Programming', 'Data Structures and Algorithms']
    },
    {
      institution: 'ALX Africa',
      degree: 'Data Science',
      period: 'June 2025 - August 2026',
      coursework: ['PowerBI', 'SQL', 'Python', 'Machine Learning', 'Spreadsheets']
    },
    {
      institution: 'ALX Africa',
      degree: 'Certificate in AI Career Essentials (AICE)',
      period: '2025',
      coursework: ['AI Automation', 'Canva', 'Designing and Creating a website']
    },
    {
      institution: 'Emobilis Institute of Technology',
      degree: 'Certificate in Software Development',
      period: 'October 2023 - December 2023',
      coursework: ['Django Framework', 'Python', 'HTML', 'CSS']
    },
    {
      institution: 'Moringa School',
      degree: 'Certificate in Software Development',
      period: 'February 2023 - August 2023',
      coursework: ['HTML', 'CSS', 'JavaScript', 'React js', 'Jinja2', 'FastAPI', 'Flask', 'Python']
    },
    {
      institution: 'Strathmore University',
      degree: 'Certificate in Data Analytics and Visualisation',
      period: 'July 2022 - October 2022',
      coursework: ['Python', 'Pandas', 'Numpy', 'Visualization']
    }
  ];

  const technicalSkills = [
    // Programming Languages
    'Python', 'JavaScript', 'C', 'C++', 'Java', 'C#',
    // Web Frameworks
    'ASP.NET Core', 'Jinja2', 'React.js', 'Django', 'Django REST Framework', 'FastAPI', 'Flask', 'VueJS',
    // Frontend
    'HTML', 'CSS', 'Bootstrap', 'Tailwind',
    // Databases
    'PostgreSQL', 'SQL', 'MariaDB', 'MySQL', 'SQLite',
    // Data Analysis & Visualization
    'SQL', 'Visualization', 'NumPy', 'Pandas', 'Matlab', 'PowerBI',
    // Tools & DevOps
    'Git', 'GitHub', 'Jira', 'Docker', 'Trello', 'CI/CD', 'Celery', 'Redis', 'Cloudinary',
    // Mobile
    'Flutter',
    // IT & Technical Support
    'Windows Operating Systems', 'Microsoft 365', 'Hardware & Software Troubleshooting', 'IT Support', 'Software Installation',
    // Soft Skills
    'Problem Solving', 'Critical Thinking', 'Time Management', 'Communication', 'Interpersonal Skills'
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
                color: '#ffd700',
                fontWeight: '600',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                bgcolor: 'rgba(255, 215, 0, 0.1)'
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
              Learning Journey
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
              Education
            </Typography>
          </Box>
        </Fade>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            {education.map((edu, index) => (
              <Fade in={true} timeout={1000 + index * 150} key={index}>
                <Paper 
                  elevation={6} 
                  sx={{ 
                    p: { xs: 3, md: 4 }, 
                    borderRadius: 3, 
                    bgcolor: 'rgba(27, 38, 59, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 215, 0, 0.15)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    mb: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 40px rgba(255, 215, 0, 0.15)',
                      borderColor: 'rgba(255, 215, 0, 0.3)'
                    }
                  }}
                >
                  <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Grid item>
                      <Box sx={{ 
                        bgcolor: 'rgba(255, 215, 0, 0.15)', 
                        p: 1.5, 
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <School sx={{ color: '#ffd700', fontSize: { xs: 28, md: 36 } }} />
                      </Box>
                    </Grid>
                    <Grid item xs>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          color: '#ffffff', 
                          fontWeight: '700',
                          fontSize: { xs: '1.2rem', md: '1.5rem' }
                        }}
                      >
                        {edu.institution}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#ffd700',
                          fontSize: { xs: '0.95rem', md: '1.1rem' },
                          fontWeight: '600'
                        }}
                      >
                        {edu.degree}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Chip 
                        label={edu.period} 
                        sx={{ 
                          bgcolor: 'rgba(255, 215, 0, 0.15)', 
                          color: '#ffd700',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          fontWeight: '600',
                          fontSize: { xs: '0.75rem', md: '0.85rem' }
                        }}
                      />
                    </Grid>
                  </Grid>
                  
                  <Divider sx={{ bgcolor: 'rgba(255, 215, 0, 0.15)', mb: 2 }} />
                  
                  <Typography variant="body2" sx={{ color: '#ffffff', mb: 1.5, fontWeight: '700', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    Relevant Coursework:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {edu.coursework.map((course, i) => (
                      <Chip 
                        key={i} 
                        label={course} 
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
                    ))}
                  </Box>
                </Paper>
              </Fade>
            ))}
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 6 }}>
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
                maxWidth: 'md',
                mx: 'auto'
              }}
            >
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  color: '#ffd700', 
                  fontWeight: '800', 
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  letterSpacing: '-0.5px'
                }}
              >
                Technical Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {technicalSkills.map((skill, index) => (
                  <Chip 
                    key={index} 
                    label={skill} 
                    sx={{ 
                      bgcolor: 'rgba(27, 38, 59, 0.8)', 
                      color: '#e0e0e0',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      fontSize: { xs: '0.8rem', md: '0.9rem' },
                      '&:hover': { 
                        bgcolor: '#ffd700',
                        color: '#0d1b2a',
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}

export default Education;
