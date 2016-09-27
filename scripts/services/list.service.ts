import { BookmarkComponent } from '../bookmark.component';
import { BOOKMARKS } from '../data/list.data.constants';

import { Injectable } from 'angular2/core';

@Injectable()
export class ListService {

  bookmarksLocalStorage = JSON.parse(  localStorage.getItem('sp-bookmarklist') );  //for possible data in the localStorage,
  bookmarksDefaultData = BOOKMARKS; //for our default data
  bookmarksToReturn = this.bookmarksDefaultData;  //for the data our service should return.

  getBookmarks() {
    if (this.bookmarksLocalStorage !== null) {
      this.bookmarksToReturn = this.bookmarksLocalStorage;
    }
    return Promise.resolve( this.bookmarksToReturn );
  }

  setBookmarks( bookmarks : Object ) {
    localStorage.setItem( 'sp-bookmarklist', JSON.stringify( bookmarks ) );
  }

}
