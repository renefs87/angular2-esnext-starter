import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './post-list.template.html';
import { UserService } from '../../../auth';
import { PostService } from '../../services/post/post.service';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic';
let DetectRTC = require('detectrtc');

@Component({
  selector: 'post-list',
  template: template,
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES, PostListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class PostListComponent {
  constructor(postService: PostService, userService: UserService) {
    this._postService = postService;
    this.userService = userService;
  }

  ngOnInit() {
    this._postService.refreshPosts();
    console.log(DetectRTC.browser);

  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }
}
