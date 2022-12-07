import { Link } from "react-router-dom";

const Card = ({ username, img, bio, login, route }) => {
  return (
    <a href={route} target="_blank">
      <div className="flex justify-between bg-white rounded cursor-pointer text-gray-700 my-8 p-2 items-center">
        <div className="flex">
          <img
            className="rounded-full w-12 h-12 mr-4"
            src={img}
            alt="Avatar User"
          />
          <div>
            <p>{login}</p>
            <p className="text-gray-400">{bio}</p>
          </div>
        </div>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
    </a>
  );
};

export default Card;
