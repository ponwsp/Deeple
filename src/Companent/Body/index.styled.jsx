import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
justtfy-content : left;
width:100%
margin-top:43px;
margin-left:181px;
@media (max-width:430px){
    margin-left:16px;
    display:block;
    margin-right:19px;
}

`;

export const Img = styled.img`
display: block;
width:100%;
//height:60%;
 height: ${props =>props.primary   ? "50% !important" : "60% !important"};
cursor: pointer;
`
;

// export const Imgcenter = styled.Img`
// width:800px !important;
// height:500px !important;
// `;



export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 5%;
row-gap: 1%;
max-width: 100%;
@media (max-width:430px){
    display:block;
}

`;


export const Right_body = styled.div`
    width:30%;
    margin-left:30px;
    @media (max-width:430px){
        width:100%;
        margin-left:16px;
    }
`;


export const Left_body = styled.div`
    width:70%;
    @media (max-width:430px) {
        width:100%;
        border-block-end: 1px black solid;
    }
`;


export const Right_detail = styled.div`
margin-top : 10%;

`;
