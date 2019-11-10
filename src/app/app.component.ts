import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-adsense';
  document: AngularFirestoreDocument;
  collection: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.getCollection();
    this.getDocument();
  }

  getCollection() {
    this.collection = this.db.collection('/Marvel');
    this.collection.valueChanges().subscribe(res => {
      console.log('collection', res);
    });
  }

  getDocument() {
    this.document = this.db.doc('/Marvel/XzGReB5uWt1v2Q66Faox');
    this.document.valueChanges().subscribe(res => {
      console.log('document', res);
    });
  }

  createDocument() {
    this.collection.add({ name: '鋼鐵人' });
  }

  updateDocument() {
    this.document.update({ name: '雷神' });
  }

  deleteDocument() {
    this.document.delete();
  }

}
