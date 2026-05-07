import { Button, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UsersTable = ({ users }) => {
  console.log(users);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-150">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell className={"flex gap-3 items-center "}>
                    <Link href={`users/${user._id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <Link href={""}>
                      <Button variant="outline">Edit</Button>
                    </Link>
                    <Button variant="danger">Delete</Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UsersTable;
