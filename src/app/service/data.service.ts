import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addProvider(username: string, provider: User){
    return this.http.post<User>( `${API_URL}/agent/${username}/create/provider`, provider);
  }

  retrieveAllProviders(username: string){
    return this.http.get<User[]>( `${API_URL}/agent/${username}/providers/all`);
  }

  retrieveProvider(username: string){
    return this.http.get<User>( `${API_URL}/fetch/provider/${username}`);
  }

  updateProvider(provider: User){
    return this.http.put<User>( `${API_URL}/update/provider`, provider);
  }
}
