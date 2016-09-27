import { Component, OnInit } from 'angular2/core';
import { Bookmark, BookmarkComponent } from './bookmark.component';
import {  ListService } from './services/list.service';

@Component({
  selector: 'sp-list',
    templateUrl: './templates/list.html',
    directives: [ BookmarkComponent ],
    providers: [ ListService ]
})
export class ListComponent implements OnInit {

  public bookmarks: Array<Object>;

  constructor( private listService: ListService ) {

  }

  getBookmarkLists() {
    this.listService.getBookmarks().then( bookmarks => this.bookmarks = bookmarks );
  }

  // The "ngOnInit" function gets called, when the component gets activated.
  ngOnInit() {
    this.getBookmarkLists();
  }

  // setList uses the "ListService" to save the complete list.
 setList() {
   this.listService.setBookmarks( this.bookmarks );
 }

 // The function deletes the bookmark and saves the complete list.
 deleteBookmark( bookmark : Bookmark, i : number ) {
   this.bookmarks.splice( i, 1 );
   this.setList();
 }
 
}
