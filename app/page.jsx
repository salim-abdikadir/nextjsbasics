export default async function Home() {
  const users = await getusers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getusers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  return users;
}
