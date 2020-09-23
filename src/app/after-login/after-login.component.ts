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

  providers =[
    new User("PPB00001","Provider 1","PVDR","Ludhiana","Punjab","99887513274","pvd1@gmail.com","SPB00004",new Date("2020-09-22"),"XXXXPB00001"),
    new User("PPB00002","Provider 2","PVDR","Patiala","Punjab","77887513274","pvd2@gmail.com","SPB00004",new Date("2020-09-22"),"XXXXPB00002"),
    new User("PPB00003","Provider 3","PVDR","Ludhiana","Punjab","66887513274","pvd3@gmail.com","SPB00004",new Date("2020-09-22"),"XXXXPB00003"),
    new User("PPB00005","Provider 5","PVDR","Moga","Punjab","55887513274","pvd5@gmail.com","SPB00004",new Date("2020-09-22"),"XXXXPB00005")
  ]

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // this.refreshTodos()   ---- for connecting with API
  }

  refreshTodos(){
    this.dataService.retrieveAllProviders(sessionStorage.getItem('authenticatedUser')).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  updateProvider(id: string) {
    console.log(`update ${id}`);
    this.router.navigate(['provider',id]);
  }

  addProvider() {
    this.router.navigate(['provider','']);
  }

}
