import { Injectable } from '@angular/core';
import { parse } from 'node-html-parser';

@Injectable({
  providedIn: 'root'
})
export class ProjectGrepService {

  gitHubSource: any = fetch('https://github.com/Averonda?tab=repositories');

  constructor() { }

  public getLinks(){
    console.log(parse(this.gitHubSource));
  }

}
