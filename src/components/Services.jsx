import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
const cards = [{name:"Marketing Strategy",slug:'Marketing'},{name:"Analysis For Tools",slug:'Analysis'},{name:"UX/UI Strategy",slug:'UI'},{name:"Server Security",slug:'Server'},{name:"Database Analysis",slug:'Database'},{name:"Web Development" ,slug:'Web'}];


function PricingContent() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={8} style={{marginTop:"8%",display: "flex", alignItems: "center" }}>
          {cards.map((card) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={card.name}
              xs={12}
              sm={12}
              md={4}
              align="left"
            >
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h5" variant="h4" color="black">
                      {card.name}
                    </Typography>
                  </Box>
                  <ul>
                  <span style={{lineHeight:"26pt"}}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking.
                  </span>
                    {/* {card.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))} */}
                  </ul>
                </CardContent>
                <CardActions>
                  <NavLink to={`/service/${card.slug}`}>
                  <Button fullWidth variant="outlined">
                    Read More
                  </Button>
                  </NavLink>
                 
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}