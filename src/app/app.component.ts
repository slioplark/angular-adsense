import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-adsense';

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.getCollection();
    this.getDocument();
  }

  getCollection() {
    this.db.collection('/Marvel').valueChanges().subscribe(res => {
      console.log('collection', res);
    });
  }

  getDocument() {
    this.db.doc('/Marvel/EAXDM2sRqG3pJY3eVZCe').valueChanges().subscribe(res => {
      console.log('document', res);
    });
  }

}
