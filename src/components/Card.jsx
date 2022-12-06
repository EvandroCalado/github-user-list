import { Link } from "react-router-dom";

const Card = ({ username }) => {
  return (
    <Link to={`/profile/${username}`}>
      <div className="flex justify-between bg-white rounded cursor-pointer text-gray-700 my-8 p-2 items-center">
        <div className="flex">
          <img
            className="rounded-full w-12 h-12 mr-4"
            src="https://avatars.githubusercontent.com/u/110628201?v=4"
            alt="Avatar User"
          />
          <div>
            <p>username</p>
            <p className="text-gray-400">bio</p>
          </div>
        </div>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
    </Link>
  );
};

export default Card;
