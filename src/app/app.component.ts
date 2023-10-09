import { LocalizedString } from '@angular/compiler';
import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerName='';
  createdmessage='Server is not created yet';
  isUsercreatedmessage = true;
  showDisplayDetails = false;
  displayLog= [];
  
constructor(){
  
}
  onUpdateServerName(event: Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
  }
  onClickResetButton(){
    this.isUsercreatedmessage = false;
    this.ServerName ='';
//     if(this.ServerName.trim().length==0){
// this.isAddServerEnable = true;
//     }
//     else{
//       this.isAddServerEnable=false;
//     }
    // this.createdmessage = `${this.ServerName} Server was created!.....`;
  }

  OnClickDisplayDetails(){
this.showDisplayDetails = !this.showDisplayDetails;
this.ServerName = "Display button Clicked.."

this.displayLog.push(new Date());
  }
// }
}
