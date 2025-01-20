import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link href="/" style={{ fontSize: '1rem', color: '#0070f3', textDecoration: 'underline' }}>
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
