import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  providers: User[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.dataService.retrieveAllProviders(sessionStorage.getItem('authenticatedUser')).subscribe(
      response => {
        this.providers=response;
      }
    )
  }

  updateProvider(id: string) {
    this.router.navigate(['provider',id]);
  }

  addProvider() {
    this.router.navigate(['provider','']);
  }

}
