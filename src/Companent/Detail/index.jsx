import { useState,useEffect } from "react";
import { getDetail } from "../../Service/getAllData";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Bodycss,Cssbutton } from "./index,styled";


function Detail(){
    const navigate = useNavigate();


    const {id} = useParams();


    const [detail,setDetail] = useState("Test Default") ;

    async function getDetailData (id){
        
        let data = await getDetail(id);
        console.log('idddddd',data)
        setDetail(data?.data[0].detail);
      }
    
    useEffect(()=>{
        console.log('fetch')
        getDetailData(id);
    },[]);




    const OkButton = (
        <Cssbutton onClick={() => navigate("/")}>
              Home
        </Cssbutton>
        )

    return(
        <Bodycss>
            {OkButton}
            {detail}     
        </Bodycss>
    )


};


export default Detail;