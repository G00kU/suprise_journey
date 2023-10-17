import { useEffect, useState } from 'react';
import star from '../../images/star.png';

export const LandingPage = () => {
    const [starCount, setStarCount] = useState([]);
    useEffect(() => {
        const newStarCount = [];
        for (let i = 0; i < 40; i++) {
            newStarCount.push(i);
        }
        setStarCount(newStarCount);
    }, []);
    console.log(starCount, 'starCount   ');
    return (<div id="lander">
        <div className='fallingStars'>
            {starCount.map(i => <FallingStars element={star} key={i} />)}
        </div>
    </div >);
}

const FallingStars = ({ element }) => {
    const startY = 0;
    const starOrigin = Math.random() * 1000;
    const startingPt = window.innerWidth < starOrigin ? starOrigin : Math.random() * 1000;
    const endY = window.innerHeight - startingPt;
    const styles = {
        "--elementPosition": Math.random() * 100 + "vw",
        "--animationDuration": Math.random() * (12 - 17) + 12 + 's',
        "--animationDelay": (Math.random() * 3 + 1).toFixed(2) + 's',
        "--elementOrgin": startingPt + "px",
        "--startY": `${startY}px`,
        "--endY": `${endY}px`,
    }
    return <>
        <img className="falling-element" style={styles} src={element} />
    </>
}
