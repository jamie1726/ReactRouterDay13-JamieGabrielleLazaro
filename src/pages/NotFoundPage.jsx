import React from "react";
import notFoundImage from '../assets/404.jpg';

//react snippets

function NotFoundPage () {
    return (
        <div>
            <h1>NotFoundPage</h1>
            <img src={notFoundImage}/>
        </div>
    )
}
export default NotFoundPage;