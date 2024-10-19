'use client';
import { LoginForm } from '@/components/auth/login-form';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
interface LoginButtonProps {
  children: ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export function LoginButton({ children, mode = 'redirect' }: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };
  if (mode === 'modal') {
    return <LoginForm />;
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
