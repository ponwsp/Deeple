import { Wrapper,Cssitemheader,Stylebutton } from './index.styled';
import { Text3 } from "./index.styled";
import {ItemHeader,ItemSearch,ItemData} from './ItemHeader';

function  AppHeader(){
    return(
        <div>
        <Wrapper>
        <Text3>deeple</Text3>
        <Cssitemheader>
        <ItemHeader className='item-header'/>
        
        </Cssitemheader>
        <Stylebutton className='buttonmenu'>..-..</Stylebutton>
        {/* <ItemSearch/> */}
        </Wrapper>
        <ItemData/>
        </div>
    );
}


export default AppHeader;