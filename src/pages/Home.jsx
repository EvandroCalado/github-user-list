import { useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [user, setUser] = useState("");
  const [listUser, setListUser] = useState("");
  const hadleSearch = async () => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    setListUser(data);
    setUser("");
  };

  return (
    <div>
      <h1 className="flex justify-center my-8 text-3xl">
        Repositórios do GitHub
      </h1>
      <div className="flex">
        <input
          className="w-4/5 text-black py-2 px-5 rounded rounded-tr-none rounded-br-none border-2 border-solid outline-none"
          type="text"
          placeholder="Digite aqui..."
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <button
          className="w-1/5 ml-1 rounded rounded-tl-none rounded-bl-none  bg-green-500 cursor-pointer hover:bg-green-600"
          onClick={hadleSearch}
        >
          Pesquisar
        </button>
      </div>
      <div>
        {listUser && (
          <Card
            username={user}
            img={listUser.avatar_url}
            bio={listUser.bio}
            login={listUser.login}
            route={`/profile/${listUser.login}`}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
