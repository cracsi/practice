import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Room from "./room";
import { useParams } from "react-router-dom";
const { useEffect, useState} = require("react");


function SpaceDetail() {

    const params = useParams();
    const [rooms,setRooms]=useState([]);
    const [spaceRooms,setSpaceRooms]=useState([]);
  
 
 useEffect(() => {
        const URL =
          "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {setRooms(data)})
       ;
    }, []); 
    useEffect(() => {
        
         setSpaceRooms(rooms.filter(obj => obj.homeId === params.spaceId))
       ;
    }, [rooms]);

    console.log(spaceRooms);

 
 return (
    <div className="container">
    <h2 className="mt-2">My rooms</h2>
    <hr></hr>
    <Col>
      {spaceRooms.map((room) => (
        <Row key={room.homeId}>
          <Room room={room} />
        </Row>
      ))}
    </Col>
  </div>
 );
}
export default SpaceDetail;