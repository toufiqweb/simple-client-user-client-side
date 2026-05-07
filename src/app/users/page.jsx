import UsersTable from '@/components/UsersTable';
import { getUsers } from '@/app/lib/data';
import React from 'react';
import { addUserAction, deleteUser } from '../lib/action';
import AddUser from '@/components/AddUser';


const UsersPage =async () => {

    const users = await getUsers()
    // const deleteUser = await deleteUser()

    return (
        <div className='space-y-5 flex flex-col items-center py-10 justify-center'>
            <h1 className='font-bold  text-center text-4xl '>This is users page</h1>
            <AddUser addUserAction={addUserAction}/>
            <UsersTable users={users} deleteUserAction={deleteUser}/>
        </div>
    );
};

export default UsersPage;