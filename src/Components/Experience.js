import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, Chip, Grid, Divider, Fade } from '@mui/material';
import { Home as HomeIcon, Work, School, Code, ContactMail, Business } from '@mui/icons-material';

function Experience() {
  const experiences = [
    {
      company: 'ExtraInch Technologies Limited',
      position: 'Software Engineer Intern',
      period: 'June 2025 – September 2025',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Developed and maintained financial web applications using React.js, Bootstrap, and Tailwind CSS to deliver responsive and user-friendly interfaces',
        'Built and enhanced mobile banking applications using Flutter for secure and seamless financial transactions',
        'Integrated APIs and payment solutions to support account management, transaction processing, and real-time financial services',
        'Improved application usability and responsiveness across web and mobile platforms',
        'Implemented modern UI/UX practices to enhance customer experience and accessibility',
        'Participated in testing, debugging, and system maintenance to ensure application reliability and security',
        'Supported deployment and continuous improvement of financial platforms through feature updates and optimization'
      ],
      accomplishments: [
        'Successfully integrated payment gateways and APIs that streamlined transaction processing and improved system efficiency',
        'Contributed to the development of secure banking solutions that enhanced customer trust and data protection',
        'Improved application performance and responsiveness, leading to a smoother user experience across devices',
        'Delivered scalable financial platforms capable of supporting growing user and transaction demands',
        'Enhanced interface design and usability, increasing accessibility and ease of navigation for users'
      ]
    },
    {
      company: 'Pula Advisors Limited',
      position: 'Software Engineer Intern',
      period: 'October 2024 – April 2025',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Collaborated on software development tasks managed through Jira ticketing system',
        'Built and maintained RESTful APIs using Django REST Framework (DRF)',
        'Developed interactive frontend components and integrated them using VueJS',
        'Implemented Celery for handling background tasks and asynchronous processing',
        'Containerized applications and services using Docker for consistent development and deployment environments',
        'Wrote and maintained unit and integration tests to ensure code reliability and performance',
        'Participated in code reviews, debugging, and ongoing system improvements',
        'Gained hands-on experience with agile development practices and full-stack workflows'
      ],
      accomplishments: [
        'Improved code quality and reliability by developing and maintaining unit and integration tests across core modules',
        'Contributed to a cleaner, more maintainable codebase',
        'Played a key role in developing scalable APIs with Django REST Framework, enabling seamless integration with frontend services'
      ]
    },
    {
      company: 'eMobilis Technology Training Institute',
      position: 'Technical Mentor - Web Development Cohort-4',
      period: 'October 2024 – December 2024',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Django-Development: Mentored on building and maintaining django based applications',
        'HTML and Bootstrap/CSS: Assisted in crafting responsive, compatible UI using HTML5, CSS, and Bootstrap',
        'Github Version control: Supported the students in creating github accounts and configuration, emphasized on branching and commit hygiene',
        'MPESA-Integration: Guided students on how to integrate mpesa api for secure payment transactions and also troubleshooting the API interactions'
      ],
      accomplishments: [
        'Successfully mentored a team to integrate MPesa payment solutions into a Django application, improving payment processing efficiency and reliability',
        'Led the frontend development by optimizing HTML and CSS code for a responsive, cross-browser compatible interface, enhancing user experience and accessibility'
      ]
    },
    {
      company: 'Extrainch Technologies Limited',
      position: 'IT Intern',
      period: 'June 2024 – August 2024',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Actively contributed to the development of web applications using ASP.NET Core',
        'Focused on building and maintaining robust APIs and backend services',
        'Collaborated with cross-functional teams to design, implement, and test scalable, secure features',
        'Wrote clean, maintainable code integrating frontend components with backend services',
        'Optimized database interactions for improved performance',
        'Participated in code reviews, debugging sessions, and continuous improvement processes',
        'Gained hands-on experience with industry best practices in software development and deployment',
        'Enhanced technical skills and solidified understanding of full-stack development'
      ],
      accomplishments: [
        'Successfully integrated new features into existing web applications, improving functionality and user experience',
        'Implemented performance optimizations that enhanced the efficiency of database queries',
        'Contributed to improving code quality through rigorous code reviews and best practices',
        'Received positive feedback from the team for problem-solving and collaboration efforts'
      ]
    },
    {
      company: 'Italanta, Elewa Company',
      position: 'Junior Developer',
      period: 'October 2023 – February 2024',
      location: 'Nairobi',
      responsibilities: [
        'Actively participated in the planning, development and implementation phases of web application projects, ensuring alignment with client requirements',
        'Developed RESTful APIs using frameworks such as Django Rest Framework and Flask ensuring seamless integration between frontend and backend systems',
        'Assisted in the development and implementation of innovative software solutions, utilizing a wide range of programming languages and frameworks including Python, Django, Flask, FastApi',
        'Utilized version controlled systems such as Git to manage code repositories, facilitate collaboration and track changes across development areas',
        'Implemented data models and database Schemas using SQL and PostgreSQL optimizing data storage and retrieval efficiency',
        'Conducted thorough debugging of software applications, employing best practice to identify and resolve issues effectively',
        'Conducted Code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement and knowledge sharing',
        'Assisted in creation of technical documentation and user manuals, enhancing accessibility and usability for end-users',
        'Integrated third-party services and APIs to extend the functionality of web applications such as Marshmallow for serializing data'
      ],
      accomplishments: [
        'Led the integration of new features into existing web applications, enhancing functionality and user experience',
        'Implemented data analysis and visualization techniques transforming raw data into actionable insights for informed decision making',
        'Implemented efficient algorithms for data processing, resulting in significant performance improvements',
        'Received recognition for exceptional problem-solving skills',
        'Designed and optimized database schemas and queries for efficient data storage and retrieval'
      ]
    },
    {
      company: 'Laika Sacco Society',
      position: 'IT Intern',
      period: 'August 2022 - January 2023',
      location: 'Thika, Kiambu',
      responsibilities: [
        'Provided technical support to end-users, resolving software related issues in a timely manner to minimize downtime and maximize productivity',
        'Assisted in the development and deployment of software applications, adhering to Software Development Lifecycle (SDLC)',
        'Assisted in the development and maintenance of internal databases, ensuring data accuracy and integrity',
        'Collaborated with IT team members to evaluate and implement software solutions that streamlined business processes and improved operational efficiency'
      ],
      accomplishments: [
        'Identified and rectified security vulnerabilities in the company\'s network infrastructure',
        'Assisted in design and implementation of database solutions ensuring data integrity and confidentiality',
        'Recognized for an outstanding performance and dedication during the internship period, receiving commendations from the CEO herself'
      ]
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
                color: '#ffd700',
                fontWeight: '600',
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                bgcolor: 'rgba(255, 215, 0, 0.1)'
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
              Career Journey
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
              Work Experience
            </Typography>
          </Box>
        </Fade>
        
        {experiences.map((exp, index) => (
          <Fade in={true} timeout={1000 + index * 200} key={index}>
            <Paper 
              elevation={6} 
              sx={{ 
                p: { xs: 3, md: 5 }, 
                borderRadius: 3, 
                bgcolor: 'rgba(27, 38, 59, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 215, 0, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                mb: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 40px rgba(255, 215, 0, 0.15)',
                  borderColor: 'rgba(255, 215, 0, 0.3)'
                }
              }}
            >
              <Grid container spacing={3} alignItems="center" sx={{ mb: 3 }}>
                <Grid item>
                  <Box sx={{ 
                    bgcolor: 'rgba(255, 215, 0, 0.15)', 
                    p: 2, 
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Business sx={{ color: '#ffd700', fontSize: { xs: 32, md: 40 } }} />
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                      color: '#ffffff', 
                      fontWeight: '700',
                      fontSize: { xs: '1.4rem', md: '1.8rem' }
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#ffd700',
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontWeight: '600'
                    }}
                  >
                    {exp.position}
                  </Typography>
                  {exp.location && (
                    <Typography variant="body2" sx={{ color: '#a0a0a0', fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                      📍 {exp.location}
                    </Typography>
                  )}
                </Grid>
                <Grid item>
                  <Chip 
                    label={exp.period} 
                    sx={{ 
                      bgcolor: 'rgba(255, 215, 0, 0.15)', 
                      color: '#ffd700',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      fontWeight: '600',
                      fontSize: { xs: '0.8rem', md: '0.9rem' }
                    }}
                  />
                </Grid>
              </Grid>
              
              <Divider sx={{ bgcolor: 'rgba(255, 215, 0, 0.15)', mb: 3 }} />
              
              <Typography variant="h6" sx={{ color: '#ffffff', mb: 2, fontWeight: '700', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                Responsibilities:
              </Typography>
              <Box sx={{ color: '#a0a0a0', pl: 2 }}>
                {exp.responsibilities.map((resp, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                    <Box sx={{ color: '#ffd700', mr: 2, mt: 0.5 }}>•</Box>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7 }}>
                      {resp}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              {exp.accomplishments.length > 0 && (
                <>
                  <Typography variant="h6" sx={{ color: '#ffffff', mt: 3, mb: 2, fontWeight: '700', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                    ⭐ Key Accomplishments:
                  </Typography>
                  <Box sx={{ color: '#a0a0a0', pl: 2 }}>
                    {exp.accomplishments.map((acc, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                        <Box sx={{ color: '#ffd700', mr: 2, mt: 0.5 }}>✓</Box>
                        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7 }}>
                          {acc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </Paper>
          </Fade>
        ))}
      </Container>
    </Box>
  );
}

export default Experience;
