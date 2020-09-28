import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export class UserCv {
        constructor() {

        }
        firstName: string;
        lastName: string;
        birthDay: string;
        cityName: string;
        roleName: string;
        phoneNumber: string;
        emailAdress: string;
        description: string;

        skils: {
                groupName: string;
                name: string;
                value: string;
        }[]

        experiences: {
                companyName: string;
                roleName: string;
                dateFrom: string;
                dateTo: string;
                description: string;
                resposobility: string;
                stackTechnology: string;
        }[]
        educations: {
                universityName: string;
                courseName: string;
                dateFrom: string;
                dateTo: string;
                degreeLevel: string;
        }[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bond-cv-light-template';

   userCv = new UserCv();

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
      this.httpClient.get<UserCv>("https://bond-common-rest-api.herokuapp.com/users?id=1").subscribe((data: UserCv)=>{ this.userCv = data });
    }

}
