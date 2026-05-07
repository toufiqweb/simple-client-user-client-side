import { getSingleUserById } from "@/lib/data";
import React from "react";

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;
//   console.log(userId);
    const user = await getSingleUserById(userId)
    console.log(user);
    

  return (
    <div className="text-center py-10">
      <h1 className="font-bold text-5xl ">This is user page</h1>
      <p className=" text-emerald-900 font-semibold text-3xl mt-10">{user.name}</p>
    </div>
  );
};

export default UserDetailPage;
