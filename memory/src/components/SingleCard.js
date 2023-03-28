import "./SingleCard.css";

export function SingleCard ({card, handleChoice}) {
const handleClick = () => {
    handleChoice(card);
   
}
return (
    <div className="card" >
            <div>
              <img className="cardFront" alt="Card Front" src={card.src} />
              <img
                className="cardBack"
                alt="Card back"
                src={"/img/cover.png"}
                onClick = {handleClick}
              />
            </div>
          </div>     
)
};