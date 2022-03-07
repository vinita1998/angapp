import { Component } from '@angular/core';      
      
@Component({      
  selector: 'app-root',      
  templateUrl: './app.component.html',      
  styleUrls: ['./app.component.css']      
})      
export class AppComponent {      
  title = 'Template Driven-Forms';      
  Register(regForm:any){      
    debugger;      
    var firstname=regForm.controls.firstname.value;      
    var lastname=regForm.controls.lastname.value;      
    var email=regForm.controls.lastname.value;      
    console.log(regForm);      
  }      
}  