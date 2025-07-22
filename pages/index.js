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
      videosTitle: 'Our Videos', // Nuevo: Título para la sección de videos
      area: 'Service Area',
      contact: 'Contact',
      areaList: 'Pennsylvania · New York · New Jersey',
      whatsapp: 'Message us on WhatsApp',
      facebook: 'Visit our Facebook Page',
      description: 'We are fully insured, highly experienced, and proudly recognized as one of the best in the industry. We offer our services in English and Spanish.',
      keywords: 'stamped concrete, concrete services, patios, driveways, sidewalks, overlays, slabs, stucco, floor restorations, Pennsylvania, New York, New Jersey, concrete contractor, construction', // Nuevo: Palabras clave para SEO
      contactFormSuggestion: 'For direct inquiries, please consider using our contact form (coming soon).', // Nuevo: Sugerencia de formulario de contacto
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
      videosTitle: 'Nuestros Videos', // Nuevo: Título para la sección de videos
      area: 'Área de Cobertura',
      contact: 'Contacto',
      areaList: 'Pensilvania · Nueva York · Nueva Jersey',
      whatsapp: 'Envíanos un mensaje por WhatsApp',
      facebook: 'Visita nuestra página de Facebook',
      description: 'Totalmente asegurados, altamente experimentados y orgullosamente reconocidos como una de las mejores empresas del sector. Ofrecemos nuestros servicios en inglés y español.',
      keywords: 'concreto estampado, servicios de concreto, patios, entradas, aceras, revestimientos, losas, estuco, restauración de pisos, Pensilvania, Nueva York, Nueva Jersey, contratista de concreto, construcción', // Nuevo: Palabras clave para SEO
      contactFormSuggestion: 'Para consultas directas, por favor considere usar nuestro formulario de contacto (próximamente).', // Nuevo: Sugerencia de formulario de contacto
    }
  };

  const text = t[lang];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>{text.title}</title>
        <meta name='description' content={text.description} />
        {/* Nuevo: Meta tags para SEO mejorado */}
        <meta name='keywords' content={text.keywords} />
        {/* Open Graph Tags para compartir en redes sociales */}
        <meta property='og:title' content={text.title} />
        <meta property='og:description' content={text.description} />
        <meta property='og:image' content='/logo.png' /> {/* Usar el logo como imagen de preview */}
        <meta property='og:url' content='https://www.universestampedconcrete.com' /> {/* Reemplaza con la URL real de tu sitio */}
        <meta property='og:type' content='website' />
      </Head>

      {/* Menú Fijo (Sticky) */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#222',
        color: '#fff',
        padding: '1rem 2rem',
        position: 'sticky', // Hace el header sticky
        top: 0,             // Se pega a la parte superior
        width: '100%',
        zIndex: 1000,       // Asegura que esté por encima de otros elementos
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)' // Sombra sutil para un efecto de elevación
      }}>
        <img src='/logo.png' alt='logo Universe Stamped Concrete' style={{ height: 60 }} />
        <nav>
          <a href='#services' style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>{text.servicesTitle}</a>
          <a href='#gallery' style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>{text.galleryTitle}</a>
          <a href='#videos' style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>{text.videosTitle}</a> {/* Nuevo enlace a sección de videos */}
          <a href='#area' style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>{text.area}</a>
          <a href='#contact' style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>{text.contact}</a>
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            style={{
              marginLeft: '1rem',
              background: '#555',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            🌐 {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      </header>

      {/* El padding-top se añade para que el contenido no quede oculto bajo el header sticky */}
      <main style={{ padding: '2rem', paddingTop: '80px' /* Ajusta según la altura real de tu header */ }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333' }}>{text.subtitle}</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '1rem auto 3rem auto' }}>{text.description}</p>

        <section id='services' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.servicesTitle}</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {text.services.map((s, i) => (
              <li key={i} style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Sección de Galería de Imágenes con Scroll Horizontal (Carrusel básico) */}
        <section id='gallery' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.galleryTitle}</h2>
          {/* Un carrusel real de React necesitaría una librería (ej. react-slick) y CSS adicional.
              Esto es un scroll horizontal mejorado, que simula un carrusel simple. */}
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory' }}>
            {[...Array(9).keys()].map(i => (
              <img
                key={i}
                src={`/gallery${i+1}.jpg`}
                alt={`${text.galleryTitle} ${i+1}`}
                style={{
                  height: 250,
                  flexShrink: 0,
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  objectFit: 'cover',
                  scrollSnapAlign: 'start'
                }}
              />
            ))}
          </div>
        </section>

        {/* Nueva Sección de Videos */}
        <section id='videos' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.videosTitle}</h2>
          {/*
            IMPORTANTE: Para incrustar videos de Facebook, debes obtener el CÓDIGO DE INSERCIÓN
            directamente desde la publicación del video en Facebook. Los enlaces de compartir/reel
            (como los que proporcionaste) NO funcionan directamente como embeds de video.
            Visita la publicación del video en Facebook, haz clic en los tres puntos "..." y busca la opción "Insertar" o "Embed".
            Copia el <iframe> resultante y pégalo aquí.
            Los siguientes <iframe> son solo ejemplos con los enlaces de compartir que proporcionaste,
            pero NO mostrarán el video correctamente sin el código de inserción real de Facebook.
          */}
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory' }}>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '560px', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1Axw4LDW16%2F&show_text=false&width=560"
                width="560"
                height="315"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 1 - Universe Stamped Concrete"
              ></iframe>
            </div>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '560px', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1GDz3yRkUn%2F&show_text=false&width=560"
                width="560"
                height="315"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 2 - Universe Stamped Concrete"
              ></iframe>
            </div>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '560px', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1BPfb9phQG%2F&show_text=false&width=560"
                width="560"
                height="315"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 3 - Universe Stamped Concrete"
              ></iframe>
            </div>
          </div>
        </section>

        <section id='area' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.area}</h2>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>{text.areaList}</p>
        </section>

        {/* Sección de Contacto Mejorada con Botones */}
        <section id='contact' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.contact}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Botón de WhatsApp */}
            <a
              href='https://wa.me/18544218352'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.2rem 2.5rem',
                backgroundColor: '#25D366', // Verde WhatsApp
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Puedes usar un SVG de WhatsApp aquí o un icono de librería */}
              <span style={{ marginRight: '15px', fontSize: '1.5rem' }}>📞</span>
              {text.whatsapp}
            </a>
            {/* Botón de Facebook */}
            <a
              href='https://www.facebook.com/profile.php?id=61577579097215&sk=followers'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.2rem 2.5rem',
                backgroundColor: '#1877F2', // Azul Facebook
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Puedes usar un SVG de Facebook aquí o un icono de librería */}
              <span style={{ marginRight: '15px', fontSize: '1.5rem' }}>👍</span>
              {text.facebook}
            </a>
          </div>
          <p style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: '#555', textAlign: 'center' }}>
            {text.contactFormSuggestion}
            {/* Aquí podrías integrar un formulario de contacto real usando un servicio como Formspree o Netlify Forms */}
          </p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '1.5rem', background: '#f2f2f2', color: '#777', fontSize: '0.9rem' }}>
        &copy; 2025 Universe Stamped Concrete. Todos los derechos reservados.
      </footer>
    </div>
  );
}
