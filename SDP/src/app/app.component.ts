import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SDP';

  ngOnInit(){
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"13caa55b8a7cd1f476a25f7a1291d3e1f","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window['kommunicate'] = m; m._globals = kommunicateSettings;
  })(document, window['kommunicate'] || {});
 }
}
