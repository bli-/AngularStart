import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <ul>
      @for (post of redditData(); track post.permalink){
        <li>{{ post.data.title }}</li>
      }
    </ul>
  `,
  imports: [JsonPipe],
})
export class HomeComponent {
  private http = inject(HttpClient);

  redditData = toSignal(
    this.http
      .get('https://www.reddit.com/r/gifs/new/.json?limit=10') // does not work.  Might be locked down
      .pipe(map((res: any) => res.data.children))
  );
}