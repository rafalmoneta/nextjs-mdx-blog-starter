import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404(): null {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
}
