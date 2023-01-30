import { Grid, Wrapper,Left_body,Right_body,Right_detail } from "./index.styled";
import Detail from "./detailpic";
import { useState,useEffect } from "react";
import { getUser } from "../../Service/getAllData";



function Body(){


    const[Data,setdataFetch] = useState([]);

    const fetchData = useEffect(()=>{
  
      getAllData();
    },[])
  
    
  async function getAllData (){
    let data = await getUser();
    setdataFetch(data?.data);
  }

  const data = ['เลือกห้ัวข้อที่คุณสนใจ','All','News','Technologies','E-Commerce','Marketing','Case Studies','User Tip','Popular','gx]dsdsgsdgsgsd','sdgsdgdsgsdgsdgdsgsd'];


  const listdata = data.map((i)=>{
      return (<Right_detail>{i}</Right_detail>)
                
  });



        let itemDetail = [];

        Data.map((i,e) =>{
            if(e>0)
            itemDetail.push(<Detail srcpic={i.pathimgUrl} DataTitle = {i.titleName} Data = {i.description} id = {e}/>)
        });

    return(
        <Wrapper>
        <Left_body>
        <Detail srcpic={Data[0]?.pathimgUrl} DataTitle = {Data[0]?.titleName} Data = {Data[0]?.description} id = {0}/>
        <Grid>

            {itemDetail}
            {/* <Detail srcpic={Data[0].pathimgUrl} Data = {Data[0].description}/> */}

        </Grid>
        </Left_body>
        <></>
        <Right_body>
        {listdata}
        </Right_body>
        </Wrapper>
    )



}



export default Body;