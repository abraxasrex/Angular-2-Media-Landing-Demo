import { Component } from '@angular/core';
import MockDataService from './services/services';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MockDataService ]
})
export class AppComponent {
  public videoMode = true;
  public music: any = null;
  public landingInfo: any = {
      "backgroundImage":null,
      "backgroundVideo": null,
      "copyText": null,
      "title": "Loading..."
  };
  constructor(private dataService: MockDataService){
    this.dataService = dataService;
    this.dataService.getMockData().subscribe(
      (data) => {
        this.landingInfo = data;
        this.bootstrapAudio(data["audio"]);
      },
      (err) => console.log("err: ", err)
    );
  }

  public skipVideo(){
    this.videoMode = false;
  }

  public bootstrapAudio(audioLocation: string){
    this.music = new Audio(audioLocation);
  }
  public playAudio(){
   if(this.music){
     this.music.play();
   }
  }
  public pauseAudio(){
    if(this.music){
      this.music.pause();
    }
  }
  public resetAudio(){
    if(this.music){
      this.music.currentTime = 0;
    }
  }
  
}
