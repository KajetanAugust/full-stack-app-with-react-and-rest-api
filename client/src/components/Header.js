import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

    return(
        <div className="header">
            <div className="bounds">
                <Link to='/'><h1 className="header--logo">Courses</h1></Link>
                <nav><Link className="signup" to="/signup">Sign Up</Link><Link className="signin" to="/signin">Sign
                    In</Link></nav>
            </div>
        </div>
    )

}