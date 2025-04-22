import '../../styles/index.css'

export function Cards() {
  
  const Card = ({ title, text, buttonText}) => (
<div className="col-12 col-md-3 col-lg-3 mb-4">
      <div className="card h-100">
        <div className="imageCard d-flex align-items-center justify-content-center"><h1>500 x 325</h1></div>
        <div className="card-body d-flex flex-column align-items-center text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <input className="btn btn-primary" type="button" value={buttonText} />
        </div>
      </div>
    </div>
  );
  
  const cardsData = [
    {
      title: "Card title 1",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.",
      buttonText: "Find Out More!"
    },
    {
      title: "Card title 2",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      buttonText: "Find Out More!"
    },
    {
      title: "Card title 3",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.",
      buttonText: "Find Out More!"
    },
    {
      title: "Card title 4",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      buttonText: "Find Out More!"
    }
  ];
  
  return (

    <div className="container">
    <div className="row">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  </div>

  );
}