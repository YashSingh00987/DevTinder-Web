const UserCard = ({ user }) => {
  const { firstName, lastName, age, about, gender, skills, photoUrl } = user;
  console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure className="pt-2">
        <img
          src={photoUrl}
          alt="user"
          height={"200px"}
          width={"300px"}
          className="rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && gender && <p>{`${age}, ${gender}`}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center py-2">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
