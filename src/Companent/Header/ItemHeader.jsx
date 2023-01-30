import { Text1 } from "./index.styled";
import { Text2,Back } from "./index.styled";
import styled from "styled-components";


function ItemHeader(){

    const SP = styled.span`
      display:flex;
      font-size:20px;
      line-height:10px;
      align-item:center;
    `;

    const data = ['Product','Agencies','Resource','Pricing','TH','Blog','Signin'];

    function text(data){

        return <SP className="textheader">{data}</SP>;
    };

    const test = <span className="textheader">'444555'</span>;



      
      return data.map((i,e) =>{
        return text(i);
      })
    
    

};

function ItemSearch(){
    return (
        <div className="wrapper">
          <div className="search-wrapper">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for..."
                // onChange={(e) => setQuery(e.target.value)}
              />
              {/* <span className="sr-only">Search countries here</span> */}
            </label>
          </div>
          
          ...
        </div>
      );
  
};

function ItemData(){
    return(
        <Back>
          <Text1>หน้าแรก/Blog</Text1>
          <Text2>5 วิธีคิดค่าจัดส่งบน deeple AI Chatbot ตอบโจทย์การขายออนไลน์หลากหลายรุูปแบบ</Text2>
          {/* <Text2>ตอบโจทย์การขายออนไลน์หลากหลายรุูปแบบ</Text2> */}
          {/* <h1> ตอบโจทย์การขายออนไลน์หลากหลายรุูปแบบ</h1> */}

        </Back>
    );
};


export {ItemHeader,ItemSearch,ItemData};