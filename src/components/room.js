import Card from "react-bootstrap/Card";
import { useNavigate,useParams} from "react-router-dom";

function Room(props) {
    const params = useParams();
    const navi = useNavigate();
    function handleClick() {
        navi('/spaces/'+params.spaceId+"/"+props.room.name, { replace: true });
      }
 
    return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Body>
       <Card.Title onClick={handleClick}>
           {props.room.name}
         
       </Card.Title>
       <Card.Text>
       <p>{props.room.type}</p> 
       hola
       </Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Room;