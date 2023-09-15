import { Component } from '@angular/core';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent {
  imgSrc:String='';
  flag:boolean=false;
  imgDisplay:any=document.querySelector(".col-lg-4");

getitem(e:any){
 this.imgSrc=e;
 this.flag=true;
  console.log(this.imgDisplay)
}
leaveItem(event:any){
  if(event.target.attributes.class.value=='display'){
    this.flag=false
  }
}
}



