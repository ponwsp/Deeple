import styled from 'styled-components'



export const Wrapper = styled.div`
  
display:flex;
align-items:center;
justify-content:left;
position:relative;

`;


export const Cssitemheader = styled.div`
   display:flex;
   gap:30px;
   margin-left:20%;

   @media (max-width:430px){
      display:none;
   }

`;


export const Stylebutton = styled.button`


   display:none;


@media (max-width:430px){

      display:flex;
      position:absolute;
      right:30px;

}

`;

export const Text1 = styled.h1`
    margin-left:180px;
     font-family: 'Graphik TH';
     font-style: normal;
     font-weight: 500;
     font-size: 16px;
     line-height: 24px;
@media (max-width:430px){
   margin-left:16px;

font-size: 16px;
}


`;

export const Text2 = styled.h1`
margin-left:180px;
    font-family: 'Graphik TH';
    font-style: normal;
    font-size:40px;
    font-weight:500;
    @media (max-width:430px){
      margin-left:16px;
      font-size:28px;
   }
`;

export const Text3 = styled.h4`
    margin-left:180px;
     font-family: 'Graphik TH';
     font-style: normal;
     font-weight: 1500;
     font-size: 40px;
     line-height: 20px;
     @media (max-width: 430px) {
        margin-left:16px;
     font-weight: 1300;
     font-size: 28px;
     line-height: 10px;
  }
`;

export const Back = styled.div`
   background: #F5F7FB;
   padding-top : 20px;
   padding-bottom:20px;
   margin-bottom:50px;
`;