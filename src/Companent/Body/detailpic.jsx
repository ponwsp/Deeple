import { Img } from "./index.styled";
import { useNavigate } from "react-router-dom";
function Detail({srcpic,Data,id,DataTitle}){
    

const imgcenter = (<Img primary onClick={()=>clickpic(id)} src={srcpic}></Img>);

const subimg = (<Img onClick={()=>clickpic(id)} src={srcpic}></Img>);


const des = (id==0) ? imgcenter :subimg

const navigate = useNavigate();

function clickpic(id){

    navigate(`/detail/${id}`);
       
}


    return(

        <div>
        {des}
        <h2>
        {Data}
        </h2>
        <h2>{DataTitle}</h2>

        </div>

    );


}


export default Detail;