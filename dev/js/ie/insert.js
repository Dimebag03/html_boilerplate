﻿define(function(){

    // estilo
    var d = document;
    var style = d.createElement('style');

    d.getElementsByTagName('head')[0].appendChild(style);
    style.setAttribute('type', 'text/css');
    style.styleSheet.cssText = "*,:after,:before{margin:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.ieFrame_content{position:absolute;top:50%;width:100%;max-width:1200px;left:0;right:0;height:215px;margin-top:-130px;margin-left:auto;margin-right:auto;background:#fff;z-index:99999;padding:25px;overflow:hidden;font-family:Calibri,Arial,sans-serif!important;font-style:normal;font-size:16px;color:#7f7f7f }.ieFrame_content a,.ieFrame_content a:hover{text-decoration:none;color:#7e7e7e }.ieFrame_content p a,.ieFrame_content p a:hover{text-decoration:underline!important}.ieFrame_content>hr{margin:20px auto 40px;width:80%}.ieFrame_content>p,.ieFrame_content>ul{width:960px;max-width:100%;margin:0 auto}.ieFrame_content>p{line-height:30px;text-align:center}.ieFrame_content>ul{padding:0;list-style:none;}.ieFrame_content li{width:25%;float:left;padding:0 2%}.ieFrame_content li>a{text-align:center;width:100%;display:block;font-weight:700;text-transform:uppercase}.ieFrame_content .is-ie{color:#2198da }.ieFrame_content .is-chrome{color:#4eb84a }.ieFrame_content .is-firefox{color:#c51}.ieFrame_content .is-opera{color:#d61213 }.ieFrame_bt{zoom:1;border:1px solid #cfcfcf;font-size:15px;height:23px;line-height:23px;padding:0 20px;cursor:pointer;margin-top:13px;text-transform:none;color:#7e7e7e !important}.ieFrame_Wrapper{width:100%;height:100%;min-height:100%;zoom:1;left:0;top:0;position:fixed;z-index:999999;background:#3b3b3b }";

    // conteudo
    var divs =
        '<div class="ieFrame_Wrapper">'+
        '   <div class="ieFrame_content">' +
        '       <p> Este website requer um navegador mais atualizado! Escolha uma alternativa abaixo ou <a href="http://windows.microsoft.com/pt-br/internet-explorer/download-ie">atualize a versão de seu navegador</a>.</p>'+
        '       <hr/>'+
        '       <ul>'+
        '           <li>'+
        '               <a href="http://www.google.com/intl/pt-BR/chrome/browser/" target="_blank" title="Google Chrome" class="is-chrome"> Google Chrome<br/>'+
        '                   <div class="ieFrame_bt">Download</div>'+
        '               </a>'+
        '           </li>'+
        '           <li>'+
        '               <a href="https://www.mozilla.org/pt-BR/firefox/new/" target="_blank" title="Mozilla Firefox" class="is-firefox"> Mozilla Firefox<br/>'+
        '                   <div class="ieFrame_bt">Download</div>'+
        '               </a>'+
        '           </li>'+
        '           <li>'+
        '               <a href="http://www.opera.com/pt/computer/windows" target="_blank" title="Opera" class="is-opera"> Opera<br/>'+
        '                   <div class="ieFrame_bt">Download</div>'+
        '               </a>'+
        '           </li>'+
        '           <li>'+
        '               <a href="http://windows.microsoft.com/pt-br/internet-explorer/download-ie" target="_blank" title="InternetExplorer" class="is-ie"> Internet Explorer<br/>'+
        '                   <div class="ieFrame_bt">Download</div>'+
        '               </a>'+
        '           </li>'+
        '       </ul>'+
        '   </div>'+
        '</div>';

    d.body.innerHTML += divs;

});