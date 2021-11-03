import { React, useState } from "react";
import { useHistory } from "react-router";
import "./style.css";

const Cards = () => {
  const [cards] = useState([
    {
      id: 0,
      name: "English",
      image:
        "https://cdn5.vectorstock.com/i/1000x1000/02/84/blue-round-english-subject-concept-vector-18370284.jpg",
    },
    {
      id: 1,
      name: "Art",
      image:
        "https://ih1.redbubble.net/image.855122306.2661/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u3.jpg",
    },
    {
      id: 2,
      name: "Math",
      image:
        "https://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_770743/Image/Technology/Other%20Pictures/math.jpg",
    },
  ]);

  let history = useHistory();

  const changeRoute = (id) => {
    // console.log(id);
    history.push(`/Card/${id}`);
  };

  // const searchPath=(e)=>{
  //   //   console.log(e.target.search.value);
  //   history.push(`/Search/${e.target.search.value}`);
  // }

  return (
    <div className="cards">
      {cards.map((item) => {
        return (
          <div
            className="card"
            key={item.id}
            onClick={() => {
              changeRoute(item.id);
            }}
          >
            <img src={item.image} alt="here is subject figure" />
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
