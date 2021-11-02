import React from "react";
import { useHistory } from "react-router";

// import "./style.css";

const Cards = () => {
  const history = useHistory();
  const cards = [
    {
      id: 0,
      name: "Math",
      image: "./tree.jpg", 
    },
    {
      id: 1, 
      name: "Art",
      image: "https://aup.imgix.net/user_images/164014/private-l…uto=format,compress&w=300&h=300&dpr=2.625&frame=1",
    },
    {
      id: 2,
      name: "IT",
      image: "https://aup.imgix.net/user_images/164014/private-l…uto=format,compress&w=300&h=300&dpr=2.625&frame=1",
    },
  ];

  const changeRoute = (id) => {
    console.log(id);
    history.push(`/card/${id}`);
  };
  return (
    <div className="cards">
      {cards.map((item, i) => { 
        return (
          <div
            className="card"
            key={item.id}
            onClick={() => {
              changeRoute(item.id);
            }}
          >
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
