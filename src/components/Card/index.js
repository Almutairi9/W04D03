import { React, useState } from "react";
import { useParams } from "react-router";
import "./style.css";

const Card = () => {

  const id = useParams().id;
  
  const [cards] = useState([
    {
      id: 0,
      name: "Math",
      imgurl: "https://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_770743/Image/Technology/Other%20Pictures/math.jpg",
    },
    {
      id: 1,
      name: "Art",
      imgurl: "https://ih1.redbubble.net/image.855122306.2661/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u3.jpg",
    },
    {
      id: 2,
      name: "English",
      imgurl: "https://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_770743/Image/Technology/Other%20Pictures/math.jpg",
    },
  ]);

 

  const myID = cards.find((element) => { 
    // console.log("id", id);
    // console.log("element", element.id);
    return Number(id) === element.id;
  })

  return (
    <div className="cards">
      <div className="card1">
        <h2>{myID.name}</h2>
        <img src={myID.imgurl} alt="here is subject figure" />
      </div>
    </div>
  )

};

export default Card;
