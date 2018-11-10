import {Component} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../api/user.service";
import {LoadingController} from "@ionic/angular";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    list_user: User[] = [];

    constructor(
        public api: UserService,
        public loadingController: LoadingController
    ) {

    }
    ngOnInit() {
        this.getData();
    }
    async getData() {
        const loading = await this.loadingController.create({
            message: 'Loading'
        });
        await loading.present();
        this.api.getListUser()
            .subscribe(res => {
                console.log(res);
                for(let item of res.data){
                    let user:User= new User();
                    user.initialize(item);
                    this.list_user.push(user);
                }
                console.log(this.list_user);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
    }
}
