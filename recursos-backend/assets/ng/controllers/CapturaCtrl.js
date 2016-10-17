app.controller('CapturaCtrl', function ($scope, $state, $sails) {
  //Cargar empresas
  $scope.loadEmpresas = function () {
    $sails.get('/api/empresa').then(function (data) {
      $scope.empresasSelect = data.data;
    });
  }
  
  //Calcular Edad
  $scope.calcularEdad = function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    $scope.actDatos.datosGenerales.edad = Math.abs(ageDate.getUTCFullYear() - 1970);
}
  
  //JSON Estados
  $scope.estadosList = [
    {
      "Nombre": "Aguascalientes"
    },
    {
      "Nombre": "Baja California"
    },
    {
      "Nombre": "Baja California Sur"
    },
    {
      "Nombre": "Campeche"
    },
    {
      "Nombre": "Chiapas"
    },
    {
      "Nombre": "Chihuahua"
    },
    {
      "Nombre": "Coahuila"
    },
    {
      "Nombre": "Colima"
    },
    {
      "Nombre": "Distrito Federal"
    },
    {
      "Nombre": "Durango"
    },
    {
      "Nombre": "Estado de México"
    },
    {
      "Nombre": "Guanajuato"
    },
    {
      "Nombre": "Guerrero"
    },
    {
      "Nombre": "Hidalgo"
    },
    {
      "Nombre": "Jalisco"
    },
    {
      "Nombre": "Michoacán"
    },
    {
      "Nombre": "Morelos"
    },
    {
      "Nombre": "Nayarit"
    },
    {
      "Nombre": "Nuevo León"
    },
    {
      "Nombre": "Oaxaca"
    },
    {
      "Nombre": "Puebla"
    },
    {
      "Nombre": "Quer�taro"
    },
    {
      "Nombre": "Quintana Roo"
    },
    {
      "Nombre": "San Luis Potosí"
    },
    {
      "Nombre": "Sinaloa"
    },
    {
      "Nombre": "Sonora"
    },
    {
      "Nombre": "Tabasco"
    },
    {
      "Nombre": "Tamaulipas"
    },
    {
      "Nombre": "Tlaxcala"
    },
    {
      "Nombre": "Veracruz"
    },
    {
      "Nombre": "Yucatán"
    },
    {
      "Nombre": "Zacatecas"
    }
  ];
});