import Card from "../components/Card";

const Profile = () => {
  return (
    <div>
      <div className="flex mx-8 my-16">
        <img
          className="rounded-full w-36 h-36 mr-16"
          src="https://avatars.githubusercontent.com/u/110628201?v=4"
          alt="Avatar User"
        />
        <div className="flex flex-col w-full">
          <div className="flex gap-12">
            <div>
              <p>267</p>
              <p>Seguidores</p>
            </div>
            <div>
              <p>267</p>
              <p>Seguidores</p>
            </div>
            <div>
              <p>267</p>
              <p>Seguidores</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xl">username</p>
            <p>description</p>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Profile;
