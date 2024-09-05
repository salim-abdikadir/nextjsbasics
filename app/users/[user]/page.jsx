import { getusers } from "@/app/page";
import React from "react";

const Page = async ({ params }) => {
  const user = await getUser(params);
  const users = await getusers();
  return (
    <div>
    {console.log()}
      <h1 className="text-xl">{user?.name}</h1>
    </div>
  );
};

export async function getUser(params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.user}`
  );
  const user = await res.json();
  return user;
}
export async function generateStaticParams() {
  const users = await getusers();
  return (users.map(u => {return {user:u.id.toString()}}));
}

export default Page;
