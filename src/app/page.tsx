import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';
const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-blue-400">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            poppinsFont.className,
          )}>
          Auth
        </h1>

        <p className="text-white text-lg ">A Simple authentication service</p>

        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
