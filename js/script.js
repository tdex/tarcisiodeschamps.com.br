var app = angular.module('myApp', []);
app.controller('app', function($scope){
  $scope.nomeSite = 'Tarcísio Deschamps Silva',
  $scope.facebook = 'http://fb.com/tarcisio.deschamps',
  $scope.gplus = 'https://plus.google.com/+TarcisioDeschamps/posts',
  $scope.youtube = 'http://www.youtube.com/deschampsi',
  $scope.email = 'mailto:tardchamps94@gmail.com'
});
app.controller('projetos', function($scope){
  $scope.projeto = [
    {
      nome: 'Provas Nova Roma',
      url: 'resources/projetos/provasnr/index.html',
      classe: 'provas'
    },
    {
      nome: 'Push Menu jQuery',
      url: 'resources/projetos/pushMenu/index.html'
    },
    {
      nome: 'Blitz bafômetro' ,
      url: 'resources/projetos/blitzLeiSeca/index.html'
    },
    {
      nome: 'Consultar número primo',
      url: 'resources/projetos/primosJS/index.html'
    },
    {
      nome: 'Modelo abas com flexbox',
      url: 'resources/projetos/flexboxAbas/AbasVerticais.html'
    },
    {
      nome: 'Modelo Multi-Abas',
      url: 'resources/projetos/multiAbas/multiAbas.html'
    }

  ];
})
