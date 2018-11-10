import {Base_Model} from './base_model';

export class User extends Base_Model {


  private id: number = null;
  private first_name: string = null;
  private last_name: string = null;
  private avatar: string = null;
  private rating: number = Math.floor((Math.random() * 4) + 1);

  public getId() {
    return this.id;
  }
  public getFirstName(){
    return this.first_name;
  }
  public getLastName(){
    return this.last_name;
  }
  public getAvatar(){
    return this.avatar;
  }
  public getRating(){
    return this.rating;
  }


}
