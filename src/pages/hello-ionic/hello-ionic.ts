import { Component } from '@angular/core';
import {Platform} from "ionic-angular";
import { Http } from '@angular/http';

interface Navigator {
  app: {
    exitApp: () => any; // Or whatever is the type of the exitApp function








  }


}

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  platform: any;

 constructor(platform:Platform) {
   this.platform = Platform;
  }


  exitApp(){
    // this.platform.exitApp();
    // navigator.app.exitApp();
    navigator['app'].exitApp();
  }

  displayMsn (){
   console.log("my log ... ");
    // this.platform.exitApp();
    // app.this.platform.exitApp();
    //
    //
    // navigator.app.exitApp();


    // Platform.registerBackButtonAction(() => {
    //   const overlay = this.app._appRoot._overlayPortal.getActive();
    //   const nav = this.app.getActiveNav();
    //
    //   if(overlay && overlay.dismiss) {
    //     overlay.dismiss();
    //   } else if(nav.canGoBack()){
    //     nav.pop();
    //   } else if(Date.now() - this.lastBack > 500) {
    //     this.platform.exitApp();
    //   }
    //   this.lastBack = Date.now();
    // });
    // platform.ready().then(() => {
      // platform.registerBackButtonAction(() => {
      //   platform.exitApp();
      // });
    // });
  }



}
