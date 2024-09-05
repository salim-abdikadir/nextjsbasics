import { getStaticProps } from 'next/dist/build/templates/pages'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
    </main>
  )
}
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}