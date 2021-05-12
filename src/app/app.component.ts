import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  list_of_tasks : any=[] ;
  i:any;
  public task: string | any;
  
  exceed=false;
  empty=true;
  addtask()
  {
    if(this.list_of_tasks.length==0){
      this.exceed=false;
      this.empty=true;
    }
    if(this.list_of_tasks==[])
    {
      this.empty=true;
      this.exceed=false;
    }
    if(this.list_of_tasks.length<6 && this.task!=undefined)
    { 
      
      if(!(this.task=='') )
      {
        this.list_of_tasks.push(this.task);
        this.task='';
       
        console.log(this.list_of_tasks);
        this.empty=false;
        
      }
      if(this.list_of_tasks.length==6)
      {
        this.exceed=true;
      }
    }
    
    
    
  }
  deletetask(i: any)
  {
    this.list_of_tasks.splice(i,1);
    if(this.list_of_tasks.length==6)
    {
      this.exceed=true;
    }
    if(this.list_of_tasks.length<6)
    {
      this.exceed=false;
    }
    if(this.list_of_tasks.length==0)
    {
      this.empty=true;
    }
  }
  

}