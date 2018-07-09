module.exports = {
   title: 'Club de programación',
   port: 3000,
   description: 'Siempre aprendiendo',
   themeConfig: {
      nav: [{
            text: 'Inicio',
            link: '/'
         },
         {
            text: 'Acerca de',
            link: '/nosotros'
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
         '/': [
            ['nosotros', 'Acerca de']
         ],
         '/eventos/': [
            ['', 'Eventos'],
            ['cursos', 'Curso 2018']
         ]
      },
      lastUpdated: 'Last Updated',
      markdown: {
         lineNumbers: true
       }
   }
}