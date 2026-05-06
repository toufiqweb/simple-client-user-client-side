import UsersTable from '@/components/UsersTable';
import { getUsers } from '@/lib/data';
import React from 'react';

const UsersPage =async () => {

    const users = await getUsers()

    return (
        <div>
            <h1 className='font-bold  text-center text-4xl py-5'>This is users page</h1>
            <UsersTable users={users}/>
        </div>
    );
};

export default UsersPage;