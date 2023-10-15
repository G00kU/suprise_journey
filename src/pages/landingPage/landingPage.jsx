import { FlexContainer, ImageHolder, TitleContainer, logo } from "../../allExports";
const logoContainerStyles ={
    width:"20rem",height:"20rem"
}

export const LandingPage=()=>{
    return (<>
    <FlexContainer>
    <ImageHolder image={logo()} styles={logoContainerStyles}/>
    <TitleContainer text={"SUPRISE JOURNEY"}/>
    </FlexContainer>
    </>);
}

