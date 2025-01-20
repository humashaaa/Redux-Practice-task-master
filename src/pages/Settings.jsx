import { useGetPostQuery } from "../redux/features/api/baseApi";
import SettingCard from "./SettingCard";

const Settings = () => {
  const {data : posts, isError, isLoading, error } = useGetPostQuery()

  if(isLoading){
    return <p className="text-6xl text-red-600">Loadinggg</p>
  }

  if(!isLoading && isError){
    return <p>Something went wrong....</p>
  }



  return (
    <div>
      <h1 className="text-2xl mb-10 text-purple-900 text-center">User Posts </h1>
     <div className="grid px-6 grid-cols-4 gap-6">
     {posts?.map(post=> <SettingCard key={post.id} post={post}></SettingCard>)}
     </div>
    </div>
  );
};

export default Settings;
