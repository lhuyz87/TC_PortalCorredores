Feature: Consulta de estado de cuenta

  Scenario Outline: Relizar consulta de estado de cuenta por DNI
    Given Acceso al sistema portal de corredores
    And Ingreso a la opción Mi Portafolio con el corredor usuario "<usuario>"  y contraseña "<password>"
    And Seleccionamos la opción Estado de cuenta por cuotas
    When ingresamos el DNI "<documento>" y seleccionamos opción buscar
    Then validamos que se muestre información
    And cerramos sesion
    
    Examples:
    
    |usuario|password|documento|
    |vparvina@everis.com|Abc.123|51078135|