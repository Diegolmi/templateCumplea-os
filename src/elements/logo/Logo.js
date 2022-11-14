import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo/logoPorter3.png';


const Logo = ({image, image2}) => {
    return(
        <div >
            <Link to={process.env.PUBLIC_URL + "/"}>
            <img src={logo} alt="" style={{width: 100, height:100}}/>
                {/* <img className="logo-light" src={process.env.PUBLIC_URL + image} alt="Corporate Logo" />
                <img className="logo-dark" src={process.env.PUBLIC_URL + image2} alt="Corporate Logo" /> */}
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
