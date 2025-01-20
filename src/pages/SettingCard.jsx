
const SettingCard = ({post}) => {
  return (
    <div className="shadow-lg bg-purple-200 p-5">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default SettingCard;