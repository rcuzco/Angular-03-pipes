import { Component } from '@angular/core';
import { Promise } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  nombre: string    = "Julie";
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,0];
  title             = 'pipes';
  PI: number = Math.PI;
  a: number = 0.2353;
  salario: number = 12345.6;
  heroe =
    {
      nombre: "jonas",
      edad: "77",
      nacionalidad:"danesa"
    }

  valorPromesa = Promise<string>((resolve) =>
  {
    setTimeout(() => resolve("llegaron los datos!!"), 3500);
    //resolve => resolve("datos!!");
  });

  fecha = new Date();
  //video: string = "https://www.youtube.com/embed/kdBy3MxDzjU";
  video: string = "kdBy3MxDzjU";

  video2: string = "kdBy3MxDzjU";
}
