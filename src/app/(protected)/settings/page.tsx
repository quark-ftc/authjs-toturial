import { auth } from '@/auth';
import { signOut } from '@/auth';
export default async function SettingPage() {
  const session = await auth();

  return (
    <>
      <div>{JSON.stringify(session)}</div>);
      <form
        action={async () => {
          'use server';
          await signOut();
        }}>
        <button type="submit">Sign out</button>
      </form>
    </>
  );
}
