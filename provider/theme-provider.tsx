"use client";

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvidersContext({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
