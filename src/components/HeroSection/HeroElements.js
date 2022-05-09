import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
export const HeroContainer = styled.div`
   background: black;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 30px;
   height: 740px;
   position: relative;
   z-index: 1;
   margin-top: -40px;
`;

export const HeroBg = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   overflow: hidden;
   -o-object-fit: cover;
   object-fit: cover;
   background: #232a34;
   filter: brightness(0.4);
`


export const HeroContent = styled.div`
   z-index: 3;
   max-width: 1200px;
   position: absolute;
   padding: 8px 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow: hidden;
`

export const HeroH1 = styled.h1`
   color: #fff;
   font-size: 48px;
   text-align: center;
   
   @media screen and (max-width: 768px){
      font-size: 40px;
   }

   @media screen and (max-width: 480px){
      font-size: 32px;
   }
`

export const HeroP = styled.p`
   margin-top: 24px;
   color: #fff;
   font-size: 24px;
   text-align: center;
   max-width: 600px;

   @media screen and (max-width: 768px){
      font-size: 24px;
   }

   @media screen and (max-width: 480px){
      font-size: 18px;
   }
`

export const HeroBtnWrapper = styled.div` 
   margin-top: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 8px;
   font-size: 20px;
`