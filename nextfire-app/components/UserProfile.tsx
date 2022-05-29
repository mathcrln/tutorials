export default function UserProfile({ user }: any) {
  return (
    <div className="box-center">
      <img
        src={user.photoURL || "/hacker.png"}
        className="card-img-center"
        alt={user.displayName}
      />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );
}
