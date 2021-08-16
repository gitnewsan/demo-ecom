import { Inject, Injectable } from "@angular/core";

@Injectable()
export class DataService {
  private message: string = " This from dataservice";

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }

  getMessage(): string {
    return this.message;
  }
}
