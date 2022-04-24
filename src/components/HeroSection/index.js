import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () =>{
      setHover(!hover);
   };

  return (

    <HeroContainer>
        <HeroBg>
           <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>
           <HeroH1>Random Password Generator</HeroH1>
           <HeroP>
              Sign in for a new account to save your passwords or click on generate password to get your strong password.
            </HeroP>
            <HeroBtnWrapper>
               <Button to="signup" onMouseEnter={onHover} onMouseLeave = {onHover} primary='true' dark='true'>
                  Get started {hover ? <ArrowForward />: <ArrowRight />}
               </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection
