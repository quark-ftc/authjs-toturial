'use client';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export function Social() {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          console.log('Google');
        }}>
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          console.log('Github');
        }}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
}
