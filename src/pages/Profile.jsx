import { useGetPostByIdQuery } from "../redux/features/api/baseApi";

const Profile = () => {

  const {data : post} = useGetPostByIdQuery(1)

  return (
    <div>
      <h1 className="text-6xl text-purple-900 text-center font-bold">Get post by Id</h1>
      <div className="shadow-lg bg-purple-200 p-5">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
    </div>
  );
};

export default Profile;
