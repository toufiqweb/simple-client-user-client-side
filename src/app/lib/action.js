import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUser = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();

  // revalidate page
  console.log(data);
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }

  return data;
};

export const updatedUserData = async (userId ,formdata) => {
"use server"
  const updatedUser =  Object.fromEntries(formdata.entries())

  const res = await fetch(`http://localhost:5000/users/${userId}` ,{
    method: "PATCH" ,
    headers : {"content-type" : "application/json"},
    body : JSON.stringify(updatedUser)
  })
  const data = await res.json()

  console.log(data);
  if (modifiedCount >0) {
    revalidatePath("/users")
    redirect("/users")
  }
  
}  

export const addUserAction = async (formdata) => {
  "use server";

  const newUser = Object.fromEntries(formdata.entries());

  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  });

  const data = await res.json();

  //   console.log(data);
  if (data.insertedId) {
    revalidatePath("/users");
  }
  return data
};
