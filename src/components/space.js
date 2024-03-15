import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Space(props) {
 
 
    return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Body>
       <Card.Title>
         <Link to={"/spaces/" + props.space.id}>
           {props.space.name}
         </Link>
       </Card.Title>
       <Card.Text>
       <p>{props.space.address}</p> 
       <p>{props.space.phone}</p>
       <p>{props.space.type}</p>
       <p>{props.space.isActive}</p>
       hola
       </Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Space;