import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import classes from './Banner.module.css';
const Banner=()=>{
    return(
        <div className={classes.heading}>
        <h1>LOVE <br/> CALC   <FontAwesomeIcon icon={faHeart} className={classes.heart}/></h1>
        <p><em>Calculate how much love you share with your crush/lover!</em> </p>
        </div>
    );
};
export default Banner;