import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const PageButton = ({destination,name}) => {

    const navigate = useNavigate();

    const goToPage = () => {
        navigate(destination);
    }


    return (
        <div>
            <button onClick={goToPage}>
                    {name}
            </button>
        </div>
    )
}

export default PageButton
