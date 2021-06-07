var iframe = document.getElementById('ivuFrm_page0ivu2');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
var iframe2 = innerDoc.getElementById("isolatedWorkArea");
var innerDoc2 = iframe2.contentDocument || iframe2.contentWindow.document;
innerDoc2.getElementById("WD62").value = "TEST";
//document.write('<script type="text/javascript" src="http://mechanic.here/lbennett/mobile/dan_prefill/fill.js"></script>');
