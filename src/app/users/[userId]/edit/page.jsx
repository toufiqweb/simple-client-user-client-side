import { updatedUserData } from "@/app/lib/action";
import { getSingleUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";
import React from "react";

const EditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getSingleUserById(userId);
  console.log(user);

  const updateUserWrapper = async (userId, formdata) => {
    "use server";
    return updatedUserData(userId, formdata);
  };

  return (
    <div className="min-w-3xl  mx-auto p-10">
      <h1 className="font-bold text-center py-5">This is edit page</h1>
      <form action={updateUserWrapper} className="flex flex-col gap-4">
        <TextField
          className="w-full"
          name="name"
          defaultValue={user?.name}
          type="text"
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          className="w-full"
          name="email"
          defaultValue={user?.email}
          type="email"
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField
          className="w-full"
          name="role"
          defaultValue={user?.role}
          type="text"
        >
          <Label>Role</Label>
          <Input placeholder="Enter team role" />
        </TextField>

        <div className="flex items-center gap-3">
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            update User
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
