/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  const { firstName, lastName, age, about, gender, photoUrl, skills } = user;
  console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl h-[600px]">
      <figure>
        <img src={photoUrl} alt="user" className="rounded-md" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <div className="h-20">
          {age && gender && <p>{`${age}, ${gender}`}</p>}
          {skills && <p>{`Skills: ${skills}`}</p>}
          <p>{about}</p>
        </div>
        <div className="card-actions justify-center py-2">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
