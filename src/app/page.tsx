"use client";
import { useQuery } from "convex/react";
import { api } from "/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}

      </div>
    </main>
  );
}
