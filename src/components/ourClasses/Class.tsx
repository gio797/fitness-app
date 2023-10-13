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
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt={image} />
    </li>
  );
}

export default Class;
