import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        public  api:HttpClient
    ) {
    }

    getListUser():Observable<any>{
       return this.api.get(environment.apiUrl+"api/users");
    }
}
