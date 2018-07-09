module.exports = {
  title: 'Club de programación',
  // base: '/clubprogitmweb',
  serviceWorker: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  description: 'Siempre aprendiendo',
  themeConfig: {
    nav: [{
        text: 'Inicio',
        link: '/'
      },
      {
        text: 'Acerca de',
        link: '/nosotros/'
      },
      {
        text: 'Eventos',
        link: '/eventos/'
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
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        ['historia', 'Historia']
      ]
    }
  ]
}