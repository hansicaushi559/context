import { useUserName } from "../context/UserContext";

const Menu = () => {
  const username = useUserName()



  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="/" className="nav-link active" aria-current="page">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          {username}'s Profile
        </a>
      </li>
    </ul>
  );
};

export default Menu;
