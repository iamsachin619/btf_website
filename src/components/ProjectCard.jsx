import React from 'react'
import './ProjectCard.css'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";

function ProjectCard({project}) {



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
 

  return (
    
    
    <div class="card" >
    <div class="card__header" style={{minHeight:'237px'}}>
      <img src={project.banner} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4 className='' style={{minHeight:'64px', marginTop:'10px', marginBottom:'10px'}}>{project.headline}</h4>
      <p style={{maxHeight:'195px', textOverflow:'ellipsis', overflow:'hidden'}}>{project.short_desc}</p>
    </div>
    <div class="card__footer">
      <p className="rm" onClick={handleOpen} style={{cursor:'pointer', textDecoration:'underline'}}>Read more</p>
    </div>


     {/* modal to show long project deisc */}
     <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {project.headline}
      </DialogTitle>
      <DialogContent >
      <img src={project.banner} alt="card__image" class="card__image" style={{width:'100&', margin:'20px auto'}}/>
        <DialogContentText style={{textAlign:'justify'}}>
          {project.short_desc}
        </DialogContentText>
        <DialogContentText style={{textAlign:'justify'}}>
          {project.description}
        </DialogContentText>

        <Swiper
       slidesPerView={"auto"}
       spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{marginTop:'10px'}}
      >
        <SwiperSlide style={{width:'auto'}}>
         
            <img src={project.banner} style={{height:'200px' }}/>
          
        </SwiperSlide>
        {project.img1?(<SwiperSlide>
          <div className="imgSwipe" >
            <img src={project.img1} style={{height:'200px'}}/>
          </div>
        </SwiperSlide>):null}
        {project.img2?(<SwiperSlide>
          <div className="imgSwipe" >
            <img src={project.img2} style={{height:'200px'}}/>
          </div>
        </SwiperSlide>):null}
      </Swiper>
      </DialogContent>
      <DialogActions>
        <Button  onClick={handleClose}>
          Close
        </Button>
        
      </DialogActions>
    </Dialog>

</div>
   

  )
}



export default ProjectCard
