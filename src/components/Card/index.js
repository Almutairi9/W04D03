import {React , useState }from "react";
import { useParams } from "react-router-dom";

const Card = () => {

  const [cards] = useState ([
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
  ]) 
   const { id } = useParams();
   
  const myItem = cards.find((element) => {
    console.log("id", id);
    console.log("element", element.id);
    return Number(id) === element.id;
  });
//   console.log(myItem);

  
  return (
    <div>
        <h2> Card </h2>
      <h1>{myItem.name}</h1>
      <img src={myItem.image} alt="Subject" />
    </div>
  );
};

export default Card;
