import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function Profile(props) {
  
    return (
        <div>
        <Link to="/review" className="btn btn-primary">Review</Link>
         </div>
    );
    }

export default Profile;