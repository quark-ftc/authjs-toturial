import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function RegisterPage({ children }: LoginLayoutProps) {
  return (
    <div className="h-full flex justify-center items-center bg-blue-400">
      {children}
    </div>
  );
}
