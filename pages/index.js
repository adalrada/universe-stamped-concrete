import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = {
    en: {
      title: 'Stamped Concrete Contractor in NY, PA & NJ | Universe Stamped Concrete',
      subtitle: 'Transforming spaces with expert craftsmanship!',
      servicesTitle: 'Our Services',
      services: [
        { name: 'Sidewalks', description: 'Durable and aesthetically pleasing pedestrian pathways for residential and commercial properties, designed for safety and longevity.' },
        { name: 'Patios', description: 'Custom-designed outdoor living spaces that enhance your home’s value and provide a perfect area for relaxation and entertainment.' },
        { name: 'Driveways', description: 'Strong, long-lasting driveways built to withstand heavy traffic and all weather conditions, available in various finishes and patterns.' },
        { name: 'Overlays', description: 'Cost-effective solutions to resurface existing concrete, offering a fresh new look and improved durability without full replacement.' },
        { name: 'Slabs', description: 'Versatile concrete slabs for foundations, sheds, or general outdoor areas, poured with precision for a solid and stable base.' },
        { name: 'Stucco', description: 'High-quality stucco application for exterior walls, providing excellent protection against elements and a beautiful, textured finish.' },
        { name: 'Floor Restorations', description: 'Bringing old or damaged concrete floors back to life, including cleaning, repairing cracks, polishing, and sealing for a renewed appearance.' },
      ],
      galleryTitle: 'Gallery of Work',
      videosTitle: 'Our Videos',
      area: 'Service Area',
      contact: 'Contact Us',
      areaList: 'New York · Pennsylvania · New Jersey',
      whatsapp: 'Message us on WhatsApp',
      facebook: 'Visit our Facebook Page',
      description: 'Expert stamped concrete and construction services in New York, Pennsylvania, and New Jersey. We specialize in driveways, patios, sidewalks, and floor restorations.',
      keywords: 'stamped concrete, concrete services, patios, driveways, sidewalks, overlays, slabs, stucco, floor restorations, Pennsylvania, New York, New Jersey, concrete contractor, construction',
      contactFormTitle: 'Send us a Message',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Your Message',
      formSubmit: 'Send Message',
      formSuccess: 'Thank you for your message! We will get back to you soon.',
    },
    es: {
      title: 'Contratista de Concreto Estampado en NY, PA & NJ | Universe Stamped Concrete',
      subtitle: '¡Transformando espacios con artesanía experta!',
      servicesTitle: 'Nuestros Servicios',
      services: [
        { name: 'Aceras', description: 'Senderos peatonales duraderos y estéticamente agradables para propiedades residenciales y comerciales, diseñados para seguridad y longevidad.' },
        { name: 'Patios', description: 'Espacios exteriores diseñados a medida que aumentan el valor de su hogar y ofrecen un área perfecta para la relajación y el entretenimiento.' },
        { name: 'Entradas', description: 'Entradas resistentes y duraderas construidas para soportar el tráfico pesado y todas las condiciones climáticas, disponibles en varios acabados y patrones.' },
        { name: 'Revestimientos', description: 'Soluciones económicas para revestir concreto existente, ofreciendo una apariencia nueva y mejorada durabilidad sin un reemplazo total.' },
        { name: 'Losas', description: 'Losa de concreto versátil para cimientos, cobertizos o áreas exteriores generales, vertida con precisión para una base sólida y estable.' },
        { name: 'Estuco', description: 'Aplicación de estuco de alta calidad para muros exteriores, brindando una excelente protección contra los elementos y un acabado hermoso y texturizado.' },
        { name: 'Restauración de Pisos', description: 'Devolvemos la vida a pisos de concreto viejos o dañados, incluyendo limpieza, reparación de grietas, pulido y sellado para una apariencia renovada.' },
      ],
      galleryTitle: 'Galería de Trabajos',
      videosTitle: 'Nuestros Videos',
      area: 'Área de Cobertura',
      contact: 'Contáctenos',
      areaList: 'Nueva York · Pensilvania · Nueva Jersey',
      whatsapp: 'Envíanos un mensaje por WhatsApp',
      facebook: 'Visita nuestra página de Facebook',
      description: 'Servicios expertos de concreto estampado y construcción en Nueva York, Pensilvania y Nueva Jersey. Nos especializamos en entradas, patios, aceras y restauración de pisos.',
      keywords: 'concreto estampado, servicios de concreto, patios, entradas, aceras, revestimientos, losas, estuco, restauración de pisos, Pensilvania, Nueva York, Nueva Jersey, contratista de concreto, construcción',
      contactFormTitle: 'Envíanos un Mensaje',
      formName: 'Tu Nombre',
      formEmail: 'Tu Correo Electrónico',
      formSubject: 'Asunto',
      formMessage: 'Tu Mensaje',
      formSubmit: 'Enviar Mensaje',
      formSuccess: '¡Gracias por tu mensaje! Te responderemos pronto.',
    }
  };

  const text = t[lang];

  // Estilos de base para el contenedor principal para centrar y limitar el ancho en pantallas grandes
  const mainContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Head>
        <title>{text.title}</title>
        <meta name='description' content={text.description} />
        <meta name='keywords' content={text.keywords} />
        <meta name='viewport' content='width=device-width, initial-s/cale=1.0' />
        <meta property='og:title' content={text.title} />
        <meta property='og:description' content={text.description} />
        <meta property='og:image' content='/logo.png' /> {/* Revertido a tu logo original para OG */}
        <meta property='og:url' content='https://www.universestampedconcrete.com' />
        <meta property='og:type' content='website' />
        <link rel='canonical' href='https://www.universestampedconcrete.com/' />
      </Head>

      {/* Menú Fijo (Sticky) */}
      <header style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#222',
        color: '#fff',
        padding: '1rem 0.5rem',
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        boxSizing: 'border-box',
      }}>
        <img src='/logo.png' alt='logo Universe Stamped Concrete' style={{ height: 'auto', maxWidth: '100px', marginBottom: '10px' }} /> {/* Revertido a tu logo original para el menú */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
          <a href='#services' style={{ margin: '0 0.3rem', color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>{text.servicesTitle}</a>
          <a href='#gallery' style={{ margin: '0 0.3rem', color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>{text.galleryTitle}</a>
          <a href='#area' style={{ margin: '0 0.3rem', color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>{text.area}</a>
          <a href='#contact' style={{ margin: '0 0.3rem', color: '#fff', textDecoration: 'none', fontSize: '1.0rem' }}>{text.contact}</a>
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            style={{
              marginLeft: '0.5rem',
              background: '#555',
              color: 'white',
              border: 'none',
              padding: '0.4rem 0.8rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            🌐 {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      </header>

      {/* El padding-top se ajusta a la altura del header sticky */}
      <main style={{ ...mainContainerStyle, paddingTop: '120px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#333', marginBottom: '1rem', padding: '0 0.5rem' }}>{text.subtitle}</h1>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#666', maxWidth: '900px', margin: '1rem auto 3rem auto', padding: '0 0.5rem' }}>{text.description}</p>

        <section id='services' style={{ margin: '3rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem', textAlign: 'center' }}>{text.servicesTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', padding: '0 0.5rem' }}>
            {text.services.map((service, i) => (
              <div key={i} style={{ background: '#f9f9f9', padding: '1.2rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ fontSize: '1.3rem', color: '#007BFF', marginBottom: '0.6rem' }}>{service.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#444' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Galería de Imágenes con Scroll Horizontal (Carrusel básico) */}
        <section id='gallery' style={{ margin: '3rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem', textAlign: 'center' }}>{text.galleryTitle}</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {[...Array(9).keys()].map(i => (
              <img
                key={i}
                src={`/gallery${i+1}.jpg`}
                alt={`${text.galleryTitle} ${i+1}`}
                style={{
                  height: 200,
                  width: 'auto',
                  flexShrink: 0,
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  objectFit: 'cover',
                  scrollSnapAlign: 'start',
                  maxWidth: 'calc(100% - 2rem)',
                }}
              />
            ))}
          </div>
        </section>

        {/* Sección de Videos comentada para su uso futuro
        <section id='videos' style={{ margin: '3rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem', textAlign: 'center' }}>{text.videosTitle}</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '560px', aspectRatio: '16/9', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSuPagina%2Fvideos%2FSuVideoId1%2F&show_text=false&width=560"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4-8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 1 - Universe Stamped Concrete"
              ></iframe>
            </div>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '560px', aspectRatio: '16/9', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSuPagina%2Fvideos%2FSuVideoId2%2F&show_text=false&width=560"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4-8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 2 - Universe Stamped Concrete"
              ></iframe>
            </div>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '560px', aspectRatio: '16/9', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/share/v/1CMG7Cdz7A/&show_text=false&width=560"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4-8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 3 - Universe Stamped Concrete"
              ></iframe>
            </div>
          </div>
        </section>
        */}

        {/* Sección de Área de Cobertura con Mapa */}
        <section id='area' style={{ margin: '3rem 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.area}</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>{text.areaList}</p>

          {/* Mapa de Google Maps mostrando PA, NY, NJ centrado en Middletown NY */}
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            {/* El 'q' parameter busca la ubicación, y 'z' es el nivel de zoom (8-9 para aprox. 75 millas) */}
            <iframe
              src="https://maps.google.com/maps?q=Middletown,+New+York,+USA&z=8&t=&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map - Middletown, New York & Surrounding 75 Miles"
            ></iframe>
          </div>
        </section>

        {/* Sección de Contacto con Formulario */}
        <section id='contact' style={{ margin: '3rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem', textAlign: 'center' }}>{text.contact}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', padding: '0 0.5rem' }}>
            {/* Información de contacto y botones */}
            <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#007BFF', marginBottom: '1rem' }}>{text.contactFormTitle}</h3>
              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
                {text.formSuccess}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Botón de WhatsApp */}
                <a
                  href='https://wa.me/18454218352' // Número de teléfono actualizado
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem 1.5rem',
                    backgroundColor: '#25D366',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>📞</span>
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
                    padding: '1rem 1.5rem',
                    backgroundColor: '#1877F2',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>👍</span>
                  {text.facebook}
                </a>
              </div>
            </div>

            {/* Formulario de Contacto (usando Formspree para envío de email) */}
            <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#007BFF', marginBottom: '1rem' }}>{text.contactFormTitle}</h3>
              <form action="https://formspree.io/f/xpwjlyrl" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder={text.formName}
                  required
                  style={formInputStyle}
                />
                <input
                  type="email"
                  name="_replyto"
                  placeholder={text.formEmail}
                  required
                  style={formInputStyle}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={text.formSubject}
                  style={formInputStyle}
                />
                <textarea
                  name="message"
                  placeholder={text.formMessage}
                  required
                  rows="4"
                  style={formInputStyle}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    padding: '0.8rem 1.5rem',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
                >
                  {text.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', background: '#f2f2f2', color: '#777', fontSize: '0.8rem' }}>
        © 2025 Universe Stamped Concrete. Todos los derechos reservados.
      </footer>
    </div>
  );
}

const formInputStyle = {
  padding: '0.6rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '0.9rem',
  width: '100%',
  boxSizing: 'border-box',
};
