import "./SingleCard.css";

export function SingleCard ({card, handleChoice, flipped}) {
const handleClick = () => {
    handleChoice(card);
   
}
return (
    <div className="card" >
            <div className={flipped ? "flipped" : ""}>
              <img className="front" alt="Card Front" src={card.src} />
              <img
                className="back"
                alt="Card back"
                src={"/img/cover.png"}
                onClick = {handleClick}
              />
            </div>
          </div>     
)
};