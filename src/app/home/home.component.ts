import { Component, OnInit } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    login() {
        console.log('huy: logging in')
        firebase.login({
            type: firebase.LoginType.PHONE,
            phoneOptions: {
                phoneNumber: '+19495551234',
                verificationPrompt: "The received verification code" // default "Verification code"
            }
        }).then(
            function (result) {
                console.log('huy: success')
                JSON.stringify(result);
            },
            function (errorMessage) {
                console.log('huy: failed')
                console.log(errorMessage);
            }
        );
    }
}
