import UsersTable from '@/components/UsersTable';
import { getUsers } from '@/app/lib/data';
import React from 'react';
import { deleteUser } from '../lib/action';


const UsersPage =async () => {

    const users = await getUsers()
    // const deleteUser = await deleteUser()

    return (
        <div>
            <h1 className='font-bold  text-center text-4xl py-5'>This is users page</h1>
            <UsersTable users={users} deleteUserAction={deleteUser}/>
        </div>
    );
};

export default UsersPage;