import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = {
    en: {
      title: 'Universe Stamped Concrete',
      subtitle: 'Transforming spaces with expert craftsmanship!',
      servicesTitle: 'Our Services',
      services: [
        'Sidewalks',
        'Patios',
        'Driveways',
        'Overlays',
        'Slabs',
        'Stucco',
        'Floor Restorations',
      ],
      galleryTitle: 'Gallery of Work',
      area: 'Service Area',
      contact: 'Contact',
      areaList: 'Pennsylvania · New York · New Jersey',
      whatsapp: 'Message us on WhatsApp',
      facebook: 'Visit our Facebook Page',
      description: 'We are fully insured, highly experienced, and proudly recognized as one of the best in the industry. We offer our services in English and Spanish.'
    },
    es: {
      title: 'Universe Stamped Concrete',
      subtitle: '¡Transformando espacios con artesanía experta!',
      servicesTitle: 'Nuestros Servicios',
      services: [
        'Aceras',
        'Patios',
        'Entradas',
        'Revestimientos',
        'Losas',
        'Estuco',
        'Restauración de Pisos',
      ],
      galleryTitle: 'Galería de Trabajos',
      area: 'Área de Cobertura',
      contact: 'Contacto',
      areaList: 'Pensilvania · Nueva York · Nueva Jersey',
      whatsapp: 'Envíanos un mensaje por WhatsApp',
      facebook: 'Visita nuestra página de Facebook',
      description: 'Totalmente asegurados, altamente experimentados y orgullosamente reconocidos como una de las mejores empresas del sector. Ofrecemos nuestros servicios en inglés y español.'
    }
  };

  const text = t[lang];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>{text.title}</title>
        <meta name='description' content={text.description} />
      </Head>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#222', color: '#fff', padding: '1rem 2rem' }}>
        <img src='/logo.png' alt='logo' style={{ height: 60 }} />
        <nav>
          <a href='#services' style={{ margin: '0 1rem', color: '#fff' }}>{text.servicesTitle}</a>
          <a href='#gallery' style={{ margin: '0 1rem', color: '#fff' }}>{text.galleryTitle}</a>
          <a href='#area' style={{ margin: '0 1rem', color: '#fff' }}>{text.area}</a>
          <a href='#contact' style={{ margin: '0 1rem', color: '#fff' }}>{text.contact}</a>
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} style={{ marginLeft: '1rem', background: '#555', color: 'white' }}>🌐 {lang === 'en' ? 'ES' : 'EN'}</button>
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <h1>{text.subtitle}</h1>
        <p>{text.description}</p>

        <section id='services'>
          <h2>{text.servicesTitle}</h2>
          <ul>
            {text.services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>

        <section id='gallery'>
          <h2>{text.galleryTitle}</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
            {[...Array(9).keys()].map(i => (
              <img key={i} src={`/gallery${i+1}.jpg`} alt={`Work ${i+1}`} style={{ height: 200, borderRadius: '8px' }} />
            ))}
          </div>
        </section>

        <section id='area'>
          <h2>{text.area}</h2>
          <p>{text.areaList}</p>
        </section>

        <section id='contact'>
          <h2>{text.contact}</h2>
          <p>📞 <a href='https://wa.me/18544218352' target='_blank'>{text.whatsapp}</a></p>
          <p>📘 <a href='https://www.facebook.com/profile.php?id=61577579097215&sk=followers' target='_blank'>{text.facebook}</a></p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', background: '#f2f2f2' }}>
        &copy; 2025 Universe Stamped Concrete
      </footer>
    </div>
  );
}
