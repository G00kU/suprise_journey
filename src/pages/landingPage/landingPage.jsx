import { FlexContainer, ImageHolder, TitleContainer, logo } from "../../allExports";
const logoContainerStyles ={
    width:"35rem",
    height:"35rem",
}
const tittleTextStyles={
    "font-size":'100px',
}

export const LandingPage=()=>{


    return (<>
    <FlexContainer>
    <ImageHolder image={logo()} styles={logoContainerStyles} className='logoImage'/>
    <TitleContainer text={"SUPRISE JOURNEY"} textStyles={tittleTextStyles}/>
    </FlexContainer>
    </>);
}

