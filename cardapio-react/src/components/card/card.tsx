import "./card.css";

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, image, title }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>
        <b>Valor:</b> R$ {price},00
      </p>
    </div>
  );
}
