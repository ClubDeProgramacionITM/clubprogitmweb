module.exports = {
  title: 'Club de programación ITM',
  base: '/clubprogitmweb/',
  ga: "UA-122068895-1",
  serviceWorker: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  description: 'La página oficial del club de programación ITM',
  themeConfig: {
    nav: [{
        text: 'Inicio',
        link: '/'
      },
      {
        text: 'Eventos',
        link: '/eventos/'
      },
      {
        text: 'Nosotros',
        link: '/nosotros/'
      },      
      {
        text: 'Github',
        link: 'https://github.com/ClubDeProgramacionITM'
      }
    ],
    sidebar: {
      '/eventos/': [
        ''
      ],
      '/nosotros/': genSidebarConfig('Acerca de')
    },
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    markdown: {
      lineNumbers: true
    },
    serviceWorker: {
      updatePopup: {
        message: "¡Nuevo contenido está disponible!",
        buttonText: "Refrescar"
      }
    }
  }
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      ['veteranos', 'Veteranos'],
      ['integrantes-actuales', 'Integrantes'],
      ['historia', 'Historia']
    ]
  }]
}