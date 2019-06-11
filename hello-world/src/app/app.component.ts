
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode="map";

  // course=[
  //   {id:1, name: 'C'},
  //   {id:2, name: 'Java'},
  //   {id:3, name: 'CPP'}
  // ];

  course;
  
  post={
  title : 'Angular App',
  isFavorite: true
}

onAdd()
{
  this.course.push( {id: 4, name: 'JS'});
}

onRemove(course)
{
  let index=this.course.indexOf( course);
  this.course.splice(index,1);
//  course.name="Updated";

}


loadCourses()
{
 
this.course=[
  {id:1, name: 'C'},
  {id:2, name: 'Java'},
  {id:3, name: 'CPP'}
];
}

}
