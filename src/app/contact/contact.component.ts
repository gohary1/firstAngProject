import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(){

  }
xName:boolean=false;
xAge:boolean=false;
xEmail:boolean=false;
xPass:boolean=false;

regexDisplay(e:any){
  let id=e.target.id
  let value=e.target.value
  if(id=="floatingName"){
    this.xName=this.regesTest(regexName,value)
  }
  else if(id=="floatingAge"){
    this.xAge=this.regesTest(regexAge,value)
  }
  else if(id=="floatingEmail"){
    this.xEmail=this.regesTest(regexEmail,value)
  }
  else{
    this.xPass=this.regesTest(regexPass,value)
  }

}
regesTest(regex:any,name:string){
  let result=regex.test(name)
  return result
}
}

let regexName=/^([A-Za-z]{2,}\s?){1,3}$/
let regexAge=/^[1-9]{1}([0-9]{1})?$/
let regexEmail=/^[\d,\D]{4,}@{1}[\D]{1,}(\.com){1}$/
let regexPass=/^(?=(.*[A-Z]){1,})(?=(.*[a-z]{3,}))(?=(.*[0-9]){1,}).*$/

