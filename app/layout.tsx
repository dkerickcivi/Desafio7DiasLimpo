import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
subsets: ['latin'],
variable: '--font-inter',
})

export const metadata: Metadata = {
title: 'Desafio 7 Dias Limpo | Recupere o controle da sua vida',
description:
'O desafio prático que já ajudou dezenas de pessoas a vencerem os primeiros 7 dias limpos — o período onde a maioria falha.',
generator: 'v0.app',
icons: {
icon: [
{
url: '/icon-light-32x32.png',
media: '(prefers-color-scheme: light)',
},
{
url: '/icon-dark-32x32.png',
media: '(prefers-color-scheme: dark)',
},
{
url: '/icon.svg',
type: 'image/svg+xml',
},
],
apple: '/apple-icon.png',
},
}

export const viewport: Viewport = {
colorScheme: 'dark',
themeColor: '#1a1813',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return ( <html lang="pt-BR" className={inter.className}> <body className="antialiased">
{children}

```
    {process.env.NODE_ENV === 'production' && <Analytics />}

    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
        t=b.createElement(e);
        t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s);
        }(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '4402851559954541');
        fbq('track', 'PageView');
      `}
    </Script>

    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a]||[]).push(arguments)};
          t=l.createElement(r);
          t.async=1;
          t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "xc43qsfz29");
      `}
    </Script>
  </body>
</html>


)
}
