import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-adsense';

  constructor(private db: AngularFirestore) {
    db.collection('/05b092a2-036d-4388-9377-ea0dd0b4dc8a').valueChanges().subscribe(res => {
      console.log(res);
    });
  }

}
