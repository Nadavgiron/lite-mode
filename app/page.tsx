'use client';

import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { Toolkit } from '@/components/sections/Toolkit';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { ContentProvider } from '@/components/ui/ContentProvider';

export default function Home() {
  return (
    <ContentProvider>
      {(content) => (
        <main>
          <Hero content={content} />
          <Manifesto content={content} />
          <Toolkit content={content} />
          <Contact content={content} />
          <Footer content={content} />
        </main>
      )}
    </ContentProvider>
  );
}
