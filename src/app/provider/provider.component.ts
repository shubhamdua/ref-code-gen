import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  id: string;
  provider: User;
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() : void{
    
    this.id = this.route.snapshot.params['id'];
    
    this.provider = new User('','','','','','','','',new Date(),'');
    
    if(this.id!='') {
      this.provider.id=this.id;
      this.dataService.retrieveProvider(this.id)
          .subscribe (
            data => this.provider = data
          )
    }
  }

  saveTodo() {
    if(this.id == '') { 
      this.dataService.addProvider(sessionStorage.getItem('authenticatedUser'), this.provider)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['after-login',sessionStorage.getItem('authenticatedUser')]);
            }
          )
    } else {
      this.dataService.updateProvider(this.provider)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['after-login',sessionStorage.getItem('authenticatedUser')])
            }
          )
    }
  }

}
