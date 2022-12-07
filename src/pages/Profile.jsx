import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Profile = () => {
  const { user } = useParams();
  const [userList, setUserList] = useState("");
  const [repos, setRepos] = useState([])

  const handleParams = async () => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    setUserList(data);
    const responseRepos = await fetch(`https://api.github.com/users/${user}/repos`)
    const dataRepos = await responseRepos.json()
    setRepos(dataRepos)
  };

  useEffect(() => {
    handleParams();
  }, []);

  return (
    <div>
      <div className="flex mx-8 my-16">
        <img
          className="rounded-full w-40 h-40 mr-16"
          src={userList.avatar_url}
          alt="Avatar User"
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div>
              <p>{userList.followers}</p>
              <p>Seguidores</p>
            </div>
            <div>
              <p>{userList.following}</p>
              <p>Seguindo</p>
            </div>
            <div>
              <p>{userList.public_repos}</p>
              <p>Repositórios Públicos</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xl">{userList.login}</p>
            <p className="text-gray-400">{userList.bio}</p>
          </div>
        </div>
      </div>

      { repos && repos.map((repo, index) => {
        return (

          <Card
            key={index}
            username={user}
            img={userList.avatar_url}
            bio={repo.description}
            login={repo.full_name}
            route={repo.html_url}
          />
        )
      }) }
    </div>
  );
};

export default Profile;
