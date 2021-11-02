import { React, useState } from "react";
import { useParams } from "react-router";
import "./style.css";

const Card = () => {
  const [cards] = useState([
    {
      id: 0,
      name: "Math",
      imgurl: "https://www.w3schools.com/html/pic_trulli.jpg",
    },
    {
      id: 1,
      name: "Art",
      imgurl: "https://www.w3schools.com/html/pic_trulli.jpg",
    },
    {
      id: 2,
      name: "IT",
      imgurl: "https://www.w3schools.com/html/pic_trulli.jpg",
    },
  ]);

  const {id} = useParams();

  let myID = cards.find((element) => {
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
