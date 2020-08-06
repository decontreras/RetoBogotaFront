import { Component } from '@angular/core';
import { Location } from './models/location';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RETOBOGOTA';
  arrayLocation: Location[] = [
    { pk: "default", name: "location1", area_m2: 2, parent_location: "default" },
    { pk: "location1", name: "location1", area_m2: 3, parent_location: "default" },
    { pk: "location2", name: "location2", area_m2: 5, parent_location: "default" },
    { pk: "location3", name: "location3", area_m2: 1, parent_location: "default" }
  ];

  location: Location = new Location();

  addOrUpdate() {
    if (!this.exist(this.location.name)) {
      this.location.pk = this.location.name;
      this.arrayLocation.push(this.location);
    }
    this.location = new Location();
  }

  exist(name: string) {
    var exist = this.arrayLocation.filter(el => el.name == name);
    if (exist.length > 0) {
      return true;
    }
    return false;
  }

  loadForEdit(location_p: Location) {
    this.arrayLocation.forEach(el => el.name = el.pk);
    if (this.location.pk != location_p.pk) {
      this.location = location_p;
    } else {
      this.location = new Location();
    }
  }

  delete() {
    if (confirm("¡Esta seguro de eliminar la locación?")) {
      this.arrayLocation = this.arrayLocation.filter(el => el.pk != this.location.pk);
      this.location = new Location();
    }
  }
}
