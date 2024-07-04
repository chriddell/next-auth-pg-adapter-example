import { useSession } from "next-auth/react";

export function Auth({ children }: { children: React.ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <span className="h-12 w-12">
          <p>Loading...</p>
        </span>
      </div>
    );
  }

  return children;
}