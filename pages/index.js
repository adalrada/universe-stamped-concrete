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
      contact: 'Contact Us', // Cambiado a "Contact Us"
      areaList: 'Pennsylvania · New York · New Jersey',
      whatsapp: 'Message us on WhatsApp',
      facebook: 'Visit our Facebook Page',
      description: 'We are fully insured, highly experienced, and proudly recognized as one of the best in the industry. We offer our services in English and Spanish.',
      keywords: 'stamped concrete, concrete services, patios, driveways, sidewalks, overlays, slabs, stucco, floor restorations, Pennsylvania, New York, New Jersey, concrete contractor, construction',
      contactFormTitle: 'Send us a Message', // Nuevo: Título del formulario
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Your Message',
      formSubmit: 'Send Message',
      formSuccess: 'Thank you for your message! We will get back to you soon.',
    },
    es: {
      title: 'Universe Stamped Concrete',
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
      contact: 'Contáctenos', // Cambiado a "Contáctenos"
      areaList: 'Pensilvania · Nueva York · Nueva Jersey',
      whatsapp: 'Envíanos un mensaje por WhatsApp',
      facebook: 'Visita nuestra página de Facebook',
      description: 'Totalmente asegurados, altamente experimentados y orgullosamente reconocidos como una de las mejores empresas del sector. Ofrecemos nuestros servicios en inglés y español.',
      keywords: 'concreto estampado, servicios de concreto, patios, entradas, aceras, revestimientos, losas, estuco, restauración de pisos, Pensilvania, Nueva York, Nueva Jersey, contratista de concreto, construcción',
      contactFormTitle: 'Envíanos un Mensaje', // Nuevo: Título del formulario
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
    maxWidth: '1200px', // Limita el ancho máximo del contenido
    margin: '0 auto',   // Centra el contenido
    padding: '0 2rem',  // Padding horizontal
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Head>
        <title>{text.title}</title>
        <meta name='description' content={text.description} />
        <meta name='keywords' content={text.keywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' /> {/* Asegura la responsividad */}
        <meta property='og:title' content={text.title} />
        <meta property='og:description' content={text.description} />
        <meta property='og:image' content='/logo.png' />
        <meta property='og:url' content='https://www.universestampedconcrete.com' />
        <meta property='og:type' content='website' />
      </Head>

      {/* Menú Fijo (Sticky) */}
      <header style={{
        display: 'flex',
        flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas pequeñas
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#222',
        color: '#fff',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        boxSizing: 'border-box', // Asegura que el padding no cause desbordamiento
      }}>
        <img src='/logo.png' alt='logo Universe Stamped Concrete' style={{ height: 80 }} /> {/* Logo más grande */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a href='#services' style={{ margin: '0 0.5rem', color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>{text.servicesTitle}</a> {/* Letra más grande */}
          <a href='#gallery' style={{ margin: '0 0.5rem', color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>{text.galleryTitle}</a> {/* Letra más grande */}
          <a href='#videos' style={{ margin: '0 0.5rem', color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>{text.videosTitle}</a> {/* Letra más grande */}
          <a href='#area' style={{ margin: '0 0.5rem', color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>{text.area}</a> {/* Letra más grande */}
          <a href='#contact' style={{ margin: '0 0.5rem', color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>{text.contact}</a> {/* Letra más grande */}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            style={{
              marginLeft: '1rem',
              background: '#555',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem' // Tamaño de fuente del botón de idioma
            }}
          >
            🌐 {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      </header>

      {/* Contenedor principal para el contenido de la página */}
      <main style={{ ...mainContainerStyle, paddingTop: '100px' /* Ajusta según la altura real de tu header */ }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.8rem', color: '#333', marginBottom: '1rem' }}>{text.subtitle}</h1>
        <p style={{ textAlign: 'center', fontSize: '1.3rem', color: '#666', maxWidth: '900px', margin: '1rem auto 3rem auto' }}>{text.description}</p>

        <section id='services' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.servicesTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {text.services.map((service, i) => (
              <div key={i} style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ fontSize: '1.5rem', color: '#007BFF', marginBottom: '0.8rem' }}>{service.name}</h3>
                <p style={{ fontSize: '1rem', color: '#444' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Galería de Imágenes con Scroll Horizontal (Carrusel básico) */}
        <section id='gallery' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.galleryTitle}</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {[...Array(9).keys()].map(i => (
              <img
                key={i}
                src={`/gallery${i+1}.jpg`}
                alt={`${text.galleryTitle} ${i+1}`}
                style={{
                  height: 300, // Altura ajustada
                  width: 'auto', // Ancho automático para mantener proporción
                  flexShrink: 0,
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  objectFit: 'cover',
                  scrollSnapAlign: 'start',
                  // Responsive adjustments for images
                  maxWidth: '90vw', // Para que no desborde en móviles
                }}
              />
            ))}
          </div>
        </section>

        {/* Nueva Sección de Videos */}
        <section id='videos' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.videosTitle}</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {/*
              IMPORTANTE: Para incrustar videos de Facebook, debes obtener el CÓDIGO DE INSERCIÓN
              directamente desde la publicación del video en Facebook. Los enlaces de compartir/reel
              (como los que proporcionaste anteriormente) NO funcionan directamente como embeds de video.
              Visita la publicación del video en Facebook, haz clic en los tres puntos "..." y busca la opción "Insertar" o "Embed".
              Copia el <iframe> resultante y pégalo aquí.

              Los siguientes <iframe> son solo EJEMPLOS con URLs que probablemente NO cargarán el video correctamente
              sin el código de inserción real de Facebook (que incluye parámetros de plugins).
              Debes reemplazar el 'src' con el código de inserción real.
            */}
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '640px', aspectRatio: '16/9', scrollSnapAlign: 'start' }}> {/* Ajustado para aspecto de video */}
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSuPagina%2Fvideos%2FSuVideoId1%2F&show_text=false&width=640"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 1 - Universe Stamped Concrete"
              ></iframe>
            </div>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '640px', aspectRatio: '16/9', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSuPagina%2Fvideos%2FSuVideoId2%2F&show_text=false&width=640"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 2 - Universe Stamped Concrete"
              ></iframe>
            </div>
            <div style={{ flexShrink: 0, width: 'calc(100% - 2rem)', maxWidth: '640px', aspectRatio: '16/9', scrollSnapAlign: 'start' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSuPagina%2Fvideos%2FSuVideoId3%2F&show_text=false&width=640"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Video de Facebook 3 - Universe Stamped Concrete"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Sección de Área de Cobertura con Mapa */}
        <section id='area' style={{ margin: '4rem 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.area}</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>{text.areaList}</p>

          {/* Mapa de Google Maps */}
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '400px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544865.3409849503!2d-77.94273822557404!3d40.96349699661333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb9d0d3f2b4b%3A0x6095033c9e3e7f!2sPennsylvania%2C%20USA!5e0!3m2!1sen!2sca!4v1678888888888!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            ></iframe>
          </div>
        </section>

        {/* Sección de Contacto con Formulario */}
        <section id='contact' style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>{text.contact}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Información de contacto */}
            <div style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#007BFF', marginBottom: '1.5rem' }}>{text.contactFormTitle}</h3>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
                {text.formSuccess} {/* Puedes usar este texto aquí o para un mensaje de éxito post-envío */}
              </p>
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
                  <span style={{ marginRight: '15px', fontSize: '1.5rem' }}>👍</span>
                  {text.facebook}
                </a>
              </div>
            </div>

            {/* Formulario de Contacto (usando Formspree para envío de email) */}
            <div style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#007BFF', marginBottom: '1.5rem' }}>{text.contactFormTitle}</h3>
              {/* IMPORTANTE: Reemplaza "YOUR_FORMSPREE_FORM_ID" con tu ID real de Formspree.
                  Necesitarás crear una cuenta en formspree.io y crear un nuevo formulario para obtener tu ID.
                  El envío de emails directamente desde el frontend no es seguro ni posible sin un backend o servicio como Formspree. */}
              <form action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder={text.formName}
                  required
                  style={formInputStyle}
                />
                <input
                  type="email"
                  name="_replyto" // Especial para Formspree para la dirección de respuesta
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
                  rows="5"
                  style={formInputStyle}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.2rem',
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

      <footer style={{ textAlign: 'center', padding: '1.5rem', background: '#f2f2f2', color: '#777', fontSize: '0.9rem' }}>
        &copy; 2025 Universe Stamped Concrete. Todos los derechos reservados.
      </footer>
    </div>
  );
}

// Estilos comunes para los inputs del formulario (para evitar repetición)
const formInputStyle = {
  padding: '0.8rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '1rem',
  width: '100%',
  boxSizing: 'border-box', // Importante para el padding y el ancho
};
