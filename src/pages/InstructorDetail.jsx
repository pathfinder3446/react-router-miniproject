import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import NotFound from "./NotFound";

const InstructorDetail = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [inst, setInst] = useState([]);

    const getInstructors = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setInst(data))
        .catch((err) => console.log(err));
    };
    useEffect(() => {
      getInstructors();
    }, [id]);

  return (
    
    <div>
        {id < 11 ? 
        <div className="container text-center">
        <h2>{inst.name}</h2>
        <img
            src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
            alt=""
        />
        <h4>{inst.email}</h4>
        <h4>{inst.phone}</h4>

        <div>
            <button className='btn btn-success' onClick={() => navigate('/')}>HOME</button>
            <button className='btn btn-warning' onClick={() => navigate(-1)}>GO BACK</button>
            <button className='btn btn-warning' onClick={() => navigate(`/instructors/${+id+1}`)}>GO NEXT</button>
        </div>

    </div> : navigate(`*`)};
    </div>
    
  )
};

export default InstructorDetail