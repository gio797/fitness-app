import "./class.css";

type Props = {
  name: string;
  description?: string;
  image: string;
};

function Class({ name, description, image }: Props) {
  return (
    <li className="class">
      <div className="class-overlay">
        <p className="class-overlay-name">{name}</p>
        <p className="class-overlay-text">{description}</p>
      </div>
      <img src={image} alt={image} />
    </li>
  );
}

export default Class;
