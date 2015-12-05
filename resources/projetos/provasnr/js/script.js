var app = angular.module('myApp', []);
app.controller('app', function($scope){
  $scope.nomeSite = 'Provas Nova Roma',
  $scope.nomeHome = 'Tarcísio Deschamps Silva'
  $scope.homeurl = '../../../index.html',
  $scope.facebook = 'http://fb.com/tarcisio.deschamps',
  $scope.gplus = 'https://plus.google.com/+TarcisioDeschamps/posts',
  $scope.youtube = 'http://www.youtube.com/deschampsi',
  $scope.email = 'mailto:tardchamps94@gmail.com',
  $scope.descricao = 'Provas dos periodos passados para estudo e consulta pelos demais alunos de gradução do curso de Ciência da computação da faculdade Nova Roma.'
});
app.controller('provas', function($scope){
  $scope.prova = [
    {
      disciplina: 'Gerencia de Infraestrutura de TI - P2',
      pdf: 'provas/GerenciaInfraEstrutura_P2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Teoria da Computação - P1',
      pdf: 'provas/TeoriaDaComputacao_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Arquitetura de Computadores - P1',
      pdf: 'provas/ArquiteturaDeComputadores_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Ciências Sociais e Políticas - P2',
      pdf: 'provas/CienciasSociais_P2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Circuitos Digitais II - P2',
      pdf: 'provas/CircuitosDigitaisII_P2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Gerência de Infraestrutura de TI - P1',
      pdf: 'provas/GerenciaInfraEstrutura_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Gerência de Projetos de TI I - P1',
      pdf: 'provas/GerenciaProjeto1_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Gerência de Projetos de TI II - P1 I',
      pdf: 'provas/GerenciaProjeto2_P1-1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Gerência de Projetos de TI II - P1 II',
      pdf: 'provas/GerenciaProjeto2_P1-2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Inteligência Artificial - P1',
      pdf: 'provas/InteligenciaArtificial_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Linguagens Formais - P1',
      pdf: 'provas/LinguagensFormais_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Paradigmas de Programação - P1',
      pdf: 'provas/ParadigmasProgramacao_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Paradigmas de Programação - P2',
      pdf: 'provas/ParadigmasProgramacao_P2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Programação Funcional - P1',
      pdf: 'provas/ProgramacaoFuncional_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Programação Funcional - P2',
      pdf: 'provas/ProgramacaoFuncional_P2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Programação Funcional - Projeto',
      pdf: 'provas/ProgramacaoFuncional_P2_Projeto.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Redes - Projeto P1',
      pdf: 'provas/Redes_P1_Laboratorio.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Redes - Projeto P2',
      pdf: 'provas/Redes_P2_Laboratorio.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Sistemas Distribuidos - P1',
      pdf: 'provas/SistemasDistribuidos_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Sistemas Distribuidos - P2',
      pdf: 'provas/SistemasDistribuidos_P2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Sistemas Operacionais - P2',
      pdf: 'provas/SistemasOperacionais_P2.pdf',
      classe: 'p2'
    },
    {
      disciplina: 'Técnicas Avançadas - P1',
      pdf: 'provas/TecnicasAvancadas_P1.pdf',
      classe: 'p1'
    },
    {
      disciplina: 'Testes - P1',
      pdf: 'provas/Testes_P1.pdf',
      classe: 'p1'
    }
  ];
})
