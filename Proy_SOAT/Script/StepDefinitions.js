Given("Acceso al sistema portal de corredores", function (){

KeywordTests.OpenBrowser.Run();

  

});



Given("Ingreso a la opción Mi Portafolio con el corredor usuario {arg}  y contraseña {arg}", function (param1, param2){
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/").FindElement("a[aria-labelledby='layout_20']").Click();
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/").FindElement("[role='presentation']:nth-child(1) > [href='#']").Click();
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/").FindElement("*[name='_com_liferay_login_web_portlet_LoginPortlet_login']").SetText(param1);
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/").FindElement("input[type='password']").SetText(param2);
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/").FindElement(".lfr-btn-label").Click();

});

Given("Seleccionamos la opción Estado de cuenta por cuotas", function (){
  Delay(3000);
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/group/guest/pga/incentivos").FindElement("//a[contains(text(), 'Estados de Cuenta')]").Click();
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/group/guest/pga/incentivos").FindElement("//a[contains(., 'Cuotas')]").Click();
});

When("ingresamos el DNI {arg} y seleccionamos opción buscar", function (param1){
  Delay(3000);
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/group/guest/pga/cuotas").FindElement("//strong[contains(text(), 'Nº Póliza / Contrato')]").Click();
  Delay(2000);
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/group/guest/pga/cuotas").FindElement("//li[text()='DNI']").Click();
  Delay(2000);
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/group/guest/pga/cuotas").FindElement("#inputBuscador").SetText(param1);
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/group/guest/pga/cuotas").FindElement("#busqueda").Click();
  
});

Then("validamos que se muestre información", function (){
  Delay(3000);
  
  aqObject.CheckProperty(Aliases.browser.pageCuotasSomosCorredoresDePacFi.FindElement("//div[2]/div/table/tbody/tr/td"), "contentText", cmpNotContains, "No se encontraron registros");
});

Then("cerramos sesion", function (){
  Aliases.browser.pageCuotasSomosCorredoresDePacFi.FindElement(".open-slide > [data-senna-off='true']").Click();
  Aliases.browser.Page("https://somoscorredorescrt.pacificotest.com.pe/group/guest/pga/cuotas#").FindElement("//a[text()='Salir de mi cuenta']").Click();
});
