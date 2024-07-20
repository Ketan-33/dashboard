// pages/dashboard/home.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Welcome to my dashboard</h1>
      <Link
        href="/login"
        className="rounded-lg bg-blue-500 px-6 py-3 text-white text-lg font-medium transition-colors hover:bg-blue-400"
      >
        Log in
      </Link>
    </main>
  );
}
