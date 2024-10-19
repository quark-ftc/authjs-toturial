import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="h-full flex justify-center items-center bg-blue-400">{children}</div>
  );
}
